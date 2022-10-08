import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  currentToken: string | null;
  currentUser: any | null;
  setCurrentUser: any | null;
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: any;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentToken, setCurrentToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any | null>({});
  const [logged, setLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    setCurrentUser(user);
    navigate("/home");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    setCurrentToken(token);

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/user/${user.id}`, headers)
      .then((res) => {
        setCurrentUser(res.data);
        setLogged(true);
        navigate("/home");
      })
      .catch(() => {
        logout();
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentToken,
        currentUser,
        logged,
        login,
        logout,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
