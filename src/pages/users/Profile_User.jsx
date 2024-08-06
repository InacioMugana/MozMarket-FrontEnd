export const Profile_User=()=>{
    return(
        <div>
        

            <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
    
        <div className="bg-blue-600 text-white p-4 rounded-t-lg border-b border-gray-200">
          <h1 className="text-2xl font-bold text-left">Profile</h1>
        </div>

       
        <div className="p-6 space-y-6">
  
          <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
            <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-black text-4xl font-bold">
              A
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black text-left">Andrea Hirata</h2>
              <p className="text-black text-left">hirata@gmail.com</p>
            </div>
          </div>

         
          <nav className="bg-gray-50 rounded-lg shadow-sm divide-y divide-gray-200">
            <ul className="space-y-1">
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  General
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Notifications
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Wishlist
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Terms of Use
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Privacy Policy
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Report a Bug
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 text-black hover:bg-gray-100 text-left">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
        </div>
    )
}


