import {Route, Routes} from "react-router-dom";
import {SignIn} from "../pages/sign_in";
import {SignUp} from "../pages/sign_up";
import {RoutePath} from "./RoutePath";

const RootRouter = () => {
  return (
    <Routes>
      <Route path={RoutePath.signIn} element={<SignIn />} />
      <Route path={RoutePath.signUp} element={<SignUp />} />
    </Routes>
  );
};
export {RootRouter};
