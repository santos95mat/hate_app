import {
  createContext,
  useContext,
  ReactNode,
  // useState,
  // useEffect,
} from "react";
// import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { useAuth } from "../auth";

interface PostDefault {
  id: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

interface ChaserDefault {
  id: string;
  chasingName: string;
  chaserName: string;
  chasingId: string;
  chaserId: string;
  createdAt: string;
}

interface UserDefault {
  id: string;
  name: string;
  email: string;
  gender: string;
  updatedAt: string;
  createdAt: string;
  posts?: PostDefault[];
  chaser?: ChaserDefault[];
  chasing?: ChaserDefault[];
}

interface UsersProviderProps {
  children: ReactNode;
}
interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  gender?: string;
}
interface UsersProviderData {
  getAllUsers: () => Promise<UserDefault[] | undefined>;
  getUserById: (id: string) => Promise<UserDefault>;
  updateUserProfile: ({
    name,
    email,
    password,
    gender,
  }: UpdateUserDto) => Promise<UserDefault | undefined> | undefined;
  deleteUserProfile: () => Promise<UserDefault>;
  follow: (chasing: string) => Promise<UserDefault>;
  unfollow: (chasingId: string) => Promise<UserDefault>;
  chasers: () => ChaserDefault[];
  chasing: () => ChaserDefault[];
}

const validateName = (name: string): boolean | void => {
  if (Boolean(name)) {
    return Boolean(name);
  } else {
    console.log("Name must be filled");
  }
};
const validateEmail = (mail: string): boolean | void => {
  const isEmail = /\S+@\S+\.\S+/;
  if (isEmail.test(mail)) {
    return isEmail.test(mail);
  } else {
    console.log("Email must be in format mail@mail.com");
  }
};
const validatePassword = (pw: string): boolean | void => {
  const isPw = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (isPw.test(pw) && pw.length > 7) {
    return isPw.test(pw);
  } else {
    console.log(
      "Must have a minimal of 8 characters, one uppercase, one lowercase, one symbol and one number."
    );
  }
};
const validateGender = (gender: string): boolean | void => {
  if (
    gender.toLowerCase() === "masculino" ||
    gender.toLowerCase() === "feminino"
  ) {
    return Boolean(gender);
  } else {
    console.log(`Gender must be "Masculino" of "Feminino"`);
  }
};

const usersContext = createContext<UsersProviderData>({} as UsersProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const { currentToken, currentUser, setCurrentUser } = useAuth();

  const headers = {
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  };

  const getAllUsers = async () => {
    const res = await api.get(`/user`, headers);
    if (res.status === 200) {
      return res.data;
    }
  };

  const getUserById = async (id: string) => {
    const res = await api.get(`/user/${id}`, headers);
    if (res.status === 200) {
      return res.data;
    }
  };

  const updateUserProfile = ({
    name,
    email,
    password,
    gender,
  }: UpdateUserDto): Promise<UserDefault | undefined> | undefined => {
    const data: UpdateUserDto = {};
    if (name) {
      if (validateName(name)) {
        data.name = name;
      }
    }
    if (email) {
      if (validateEmail(email)) {
        data.email = email;
      }
    }
    if (password) {
      if (validatePassword(password)) {
        data.password = password;
      }
    }
    if (gender) {
      if (validateGender(gender)) {
        data.gender = gender;
      }
    }

    if (
      Boolean(data.name) ||
      Boolean(data.email) ||
      Boolean(data.password) ||
      Boolean(data.gender)
    ) {
      if (currentUser) {
        return api
          .patch(`/users/${currentUser.id}`, data, headers)
          .then((res: { status: number; data: UserDefault }) => {
            if (res.status === 200) {
              return res.data;
            } else {
              return undefined;
            }
          });
      }
    }
  };

  const deleteUserProfile = async () => {
    const res = await api.delete(`/user/${currentUser.id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("Erro em src > contexts > users > linha 157");
      console.log(res);
    }
  };

  const follow = async (chasing: string) => {
    const data = {
      chaserId: currentUser.id,
      chasingId: chasing,
    };
    const res = await api.post(`/chase/`, data, headers);

    await api
      .get(`/user/${currentUser.id}`, headers)
      .then((res) => setCurrentUser(res.data));

    if (res.status === 200) {
      return res.data;
    } else {
      console.log("Erro em src > contexts > users > linha 171");
      console.log(res);
    }
  };

  const unfollow = async (chasingId: string) => {
    const currentUnfollow = currentUser.chasing.find(
      (e: any) => e.chasingId === chasingId
    );

    const res = await api.delete(`/chase/${currentUnfollow.id}`, headers);

    await api
      .get(`/user/${currentUser.id}`, headers)
      .then((res) => setCurrentUser(res.data));

    if (res.status === 200) {
      return res.data;
    } else {
      console.log("Erro em src > contexts > users > linha 183");
      console.log(res);
    }
  };

  const chasers = (): ChaserDefault[] => currentUser.chaser;

  const chasing = (): ChaserDefault[] => currentUser.chasing;

  return (
    <usersContext.Provider
      value={{
        getAllUsers,
        getUserById,
        updateUserProfile,
        deleteUserProfile,
        follow,
        unfollow,
        chasers,
        chasing,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export const useUsers = () => useContext(usersContext);
