import { useContext } from "react";
import { AuthContext } from "../Context/Context";

export const useAuth = () => {
  return useContext(AuthContext);
};
