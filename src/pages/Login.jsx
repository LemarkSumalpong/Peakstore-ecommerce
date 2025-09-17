import { useState } from 'react';
import { login } from '../App/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {  X } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    
    if (username.trim() && password.trim()) {
        const user = {
            username: username,
            email: username + "@example.com",
            password: password
        }
      login(username, password);
      const toastID = toast.loading('Logging, please wait...');
      setTimeout(() => {
        toast.success('Login successfully!', { id: toastID });
      }, 2000);
      navigate('/');
    } else {
      alert('Please enter both username and password.');
      toast.error('Please enter both username and password.');
    }
  };

  return (
    <div className=" fixed inset-0 flex items-center justify-center">
      <img
        src="/src/assets/img/Logo/background2.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

         <button
          onClick={() => navigate('/')}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>

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
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded items-center justify-center w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
