import AuthProvider from "./context/AuthProvider";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
