import Login from "./components/Login";
import Profile from "./components/Profile";
import SignProfile from "./components/SignProfile";
import Singup from "./components/Singup";
import UserContextProvider from "./context/UserContextProvider";
import SignupContextProvider from "./contextsingup/SignupContextProvider";

export default function App() {
  return (
    <SignupContextProvider>
      <Singup/>
      <SignProfile/>
    </SignupContextProvider>
  );
}
