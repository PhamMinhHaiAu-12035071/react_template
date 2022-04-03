import {Route, Routes} from "react-router-dom";
import {SignIn} from "../pages/sign_in";
import {SignUp} from "../pages/sign_up";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path={"/sign-up"} element={<SignUp />} />
    </Routes>
  );
};
export {RootRouter};
