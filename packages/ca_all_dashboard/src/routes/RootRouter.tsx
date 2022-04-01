import {Routes, Route} from "react-router-dom";
import {SignIn} from "../pages/sign_in";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};
export {RootRouter};
