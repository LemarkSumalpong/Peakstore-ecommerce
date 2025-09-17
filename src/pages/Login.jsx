import { useState } from "react";
import { login } from "../App/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      login(username, password);
     const toastID = toast.loading('Logging, please wait...');
     setTimeout(() => {
      toast.success('Login successfully!', { id: toastID });
    }, 2000);
      navigate("/");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-3 py-2 rounded mb-4 w-64"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-3 py-2 rounded mb-4 w-64"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
