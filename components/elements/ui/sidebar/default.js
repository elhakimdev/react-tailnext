export default function Sidebar() {
     return (
          <div>
               <div className="flex justify-between w-64 h-screen bg-gray-50">
                    <div className="flex flex-col justify-between w-full p-5 items-left wrapper">
                         <div className="flex flex-col top-nav wrapper">
                              <a href="" className="block p-3 text-gray-700 bg-gray-200 rounded-lg nav-link-active hover:text-blue-700 hover:bg-blue-200">
                                   <span className="flex items-center space-x-3">
                                        <div className="w-5 h-5 p-4 bg-gray-300 rounded-lg"></div>
                                        <span className="font-semibold nav-link-text text-medium">Dashboard</span>
                                   </span>
                              </a>
                              <a href="" className="block p-3 text-gray-400 rounded-lg nav-link-inactive hover:text-blue-700">
                                   <span className="flex items-center space-x-3">
                                        <div className="w-5 h-5 p-4 bg-gray-200 rounded-lg"></div>
                                        <span className="font-semibold nav-link-text text-medium">Teams</span>
                                   </span>
                              </a>
                              <a href="" className="block p-3 text-gray-400 rounded-lg nav-link-inactive hover:text-blue-700">
                                   <span className="flex items-center space-x-3">
                                        <div className="w-5 h-5 p-4 bg-gray-200 rounded-lg"></div>
                                        <span className="font-semibold nav-link-text text-medium">Calender</span>
                                   </span>
                              </a>
                              <a href="" className="block p-3 text-gray-400 rounded-lg nav-link-inactive hover:text-blue-700">
                                   <span className="flex items-center space-x-3">
                                        <div className="w-5 h-5 p-4 bg-gray-200 rounded-lg"></div>
                                        <span className="font-semibold nav-link-text text-medium">Documents</span>
                                   </span>
                              </a>
                              <a href="" className="block p-3 text-gray-400 rounded-lg nav-link-inactive hover:text-blue-700">
                                   <span className="flex items-center space-x-3">
                                        <div className="w-5 h-5 p-4 bg-gray-200 rounded-lg"></div>
                                        <span className="font-semibold nav-link-text text-medium">Reports</span>
                                   </span>
                              </a>

                              <hr className="my-6 border border-b"></hr>

                              <header className="block px-3 py-2 text-base font-bold text-gray-300 font-uppercase">
                                   PROJECTS
                              </header>
                              <ul className="block text-sm font-bold text-gray-500">
                                   <li className="px-3 py-2">
                                        <a href="" classsName="">Website Redesign</a>
                                   </li>
                                   <li className="px-3 py-2">
                                        <a href="" classsName="">GraphQL API</a>
                                   </li>
                                   <li className="px-3 py-2">
                                        <a href="" classsName="">Online Guides</a>
                                   </li>
                                   <li className="px-3 py-2">
                                        <a href="" classsName="">Profit Sharings</a>
                                   </li>
                              </ul>
                         </div>
                         <div className="flex flex-row items-center justify-between w -full bottom-nav wrapper">
                              <div className="profile-wrapper">
                                   <div className="w-10 h-10 bg-black border-2 border-white rounded-full shadow-lg offset-2">
                                        <span></span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}