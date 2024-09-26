import { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for handling login here.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='w-screen h-screen relative'>
      <Spline
        scene="https://prod.spline.design/RKa0tbb0EZDNz7AM/scene.splinecode"
        className="absolute inset-0"
      />
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="w-full max-w-lg rounded-xl bg-gray-800 bg-opacity-75 px-16 py-12 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                width="150"
                alt="Instagram logo"
              />
              <h1 className="mb-2 text-2xl">Login</h1>
              <span className="text-gray-300">Enter your details</span>
            </div>
            <form onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="id@email.com"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                />
              </div>

              {/* Login Button */}
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-gradient-to-r from-purple-400 to-purple-600 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:from-purple-500 hover:to-purple-700"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
