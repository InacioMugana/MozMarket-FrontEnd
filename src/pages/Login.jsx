

export const Login =()=> {
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded p-6">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-4">MarketPlace</h2>
        <h3 className="text-center text-xl font-bold text-black mb-6">LOGIN</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-gray-900">Remember-me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enter
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
)
}
export default Login;
