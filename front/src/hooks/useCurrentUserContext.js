import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const useCurrentUserContext = () => useContext(CurrentUserContext);

export default useCurrentUserContext;
