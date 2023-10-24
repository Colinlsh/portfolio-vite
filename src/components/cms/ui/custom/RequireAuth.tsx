import React from "react";

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // const location = useLocation();
  // const { route } = useAuthenticator((context) => [context.route]);
  // if (route !== "authenticated") {
  //   return <Navigate to="/cms/login" state={{ from: location }} replace />;
  // }
  return <>{children}</>;
};

export default RequireAuth;
