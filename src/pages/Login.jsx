

const Login = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Bagian kiri */}
      <div className="flex flex-col bg-violet-500 text-white h-full w-full items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-gray-200 mt-2">Please login to your account.</p>
      </div>

      {/* Bagian kanan */}
      <div className="flex flex-col bg-white h-full w-full items-center justify-center">
        {/* Form login */}
        <form className="w-1/2 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
