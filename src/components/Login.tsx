import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Implement actual authentication logic here
      onLogin();
    }
  };

  return (
    <div className="min-h-screen w-[100vw] bg-white flex flex-col md:flex-row justify-center items-center gap-[50px]">
      <div className="hidden md:block bg-white text-white md:w-[1000px] lg:w-[1000px] p-8 flex flex-col justify-end">
        <img
          src="https://straightgreencard.com/assets/images/loginimage.png"
          alt="Professional"
          className="h-[90vh] w-[380px] rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-white md:w-[1000px] lg:w-[1000px] p-8 flex flex-col item-start justify-start">
        <div className="mb-8">
          <img
            src="https://straightgreencard.com/assets/images/loginlogo.png"
            alt="Straight Green Card"
            className="h-8 mx-auto"
          />
        </div>
        <h2 className="text-[23px]  font-bold mb-2 text-left">
          Welcome to StraightGreenCard 👋
        </h2>
        <p className="text-gray-600 mb-8 text-left text-[12px]">
          Kindly fill in your details below to login to your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-[12px] font-semibold mb-2"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              className={`w-full md:w-[540px] lg:w-[540px] p-3 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-[12px] font-semibold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`w-full p-3 border rounded-md ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mt-4 text-left">
            <Link
              to="/reset-password"
              className="text-indigo-600 text-[12px] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <br></br>
          <button
            type="submit"
            className="w-full bg-[#3D3A6D] text-white p-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
