import { useState } from "react";
import Spline from "@splinetool/react-spline";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div className="w-screen h-screen relative">
      <Spline
        scene="https://prod.spline.design/RKa0tbb0EZDNz7AM/scene.splinecode"
        className="absolute inset-0"
      />
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="w-full max-w-lg rounded-xl bg-gray-900 bg-opacity-80 px-16 py-12 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                width="150"
                alt="Instagram logo"
              />
              <h1 className="mb-2 text-3xl font-bold">Sign Up</h1>
              <span className="text-gray-400">Create an account</span>
            </div>
            <form onSubmit={handleSignUp}>
              {/* Name Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-gray-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>

              {/* Username Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-gray-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-gray-300 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="id@email.com"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-purple-600 bg-opacity-80 px-6 py-2 text-center text-white placeholder-gray-300 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                />
              </div>

              {/* Sign Up Button */}
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-gradient-to-r from-purple-400 to-purple-600 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:from-purple-500 hover:to-purple-700"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-8 flex items-center justify-center text-gray-400">
              <span className="border-t border-gray-400 w-full"></span>
              <span className="px-4">OR</span>
              <span className="border-t border-gray-400 w-full"></span>
            </div>

            {/* Google & GitHub Login Buttons */}
            <div className="mt-4 flex flex-col items-center gap-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center rounded-3xl bg-gradient-to-r from-purple-400 to-purple-600 bg-opacity-80 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:from-purple-500 hover:to-purple-700 w-full"
              >
                Login with Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="flex items-center justify-center rounded-3xl bg-gradient-to-r from-purple-400 to-purple-600 bg-opacity-80 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:from-purple-500 hover:to-purple-700 w-full"
              >
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
