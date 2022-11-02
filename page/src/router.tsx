import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const Router = (): JSX.Element => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/home" element={<Home />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Auth />} />
        </>
      )}

      <Route
        path="*"
        element={<Navigate to={logged ? "/home" : "/"} replace />}
      />
    </Routes>
  );
};

export default Router;
