import ProfileSignup from "./components/ProfileSignup";
import Signup from "./components/Signup";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Signup />
      <ProfileSignup />
    </UserProvider>
  );
}
