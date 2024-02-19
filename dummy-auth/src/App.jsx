import "./app.css";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <div className="w-full h-screen flex justify-center">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  );
}
