import React, { useEffect } from 'react'
import AdminSideBar from '../../molecules/AdminSideBar'
import { useDispatch, useSelector } from 'react-redux'
import { approveUser, fetchallUsers, suspendUser } from '../../../features/admin/adminSlice'
import { Loader } from 'lucide-react'
import { createPurchase } from '../../../features/company/companySlice'
import { Link } from 'react-router-dom'

function GetAllUser() {
    const dispatch = useDispatch()
    const {isLoading, user_data, error} = useSelector((state) => state.admin)

    useEffect(() =>{
        dispatch(fetchallUsers())
    }, [dispatch])


    if(isLoading){
        return <Loader />
    }

    const handleSubmit = (e, actionType, userId) =>{
      e.preventDefault();
      if(!userId) return alert("user not found")
      if(actionType === "approve"){
        dispatch(approveUser({userId}))
      }
      if(actionType === "suspend"){
        dispatch(suspendUser({userId}))
      }
    }
  return (
 <div className="flex h-screen overflow-hidden">
    <AdminSideBar/>
  <div className="flex flex-col flex-1 overflow-hidden">
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex md:hidden">
              <button type="button" className="p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="text-xl font-bold text-primary md:hidden">Helpxpert</div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <button className="max-w-xs bg-secondary flex items-center text-sm rounded-full focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <span className="bg-secondary text-white px-3 py-1 rounded-md">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-text mb-6">Clients Management</h1>
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search clients" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 sm:text-sm px-4 py-2 border" />
              </div>
              <div className="inline-flex">
                <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 sm:text-sm px-4 py-2 border">
                  <option>All Clients</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="inline-flex">
                <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 sm:text-sm px-4 py-2 border">
                  <option>All Plans</option>
                  <option>Basic</option>
                  <option>Premium</option>
                  <option>Enterprise</option>
                </select>
              </div>
            </div>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
              Add New Client
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">

            {!user_data || user_data.length === 0 ? <>No users Found</> : 
            <>
                {user_data?.data.map((user) => (
  <tr>
                  <td className="px-6 py-4 whitespace-nowrap" key={user?._id}>
                    <div className="flex items-center">
                    
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user?.company?.user?.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.company?.user?.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.company?.company_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.purchase?.plan}</div>
                  </td>
                
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.company?.company_contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.company?.user?.role == "company" ? <>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                    </> : 
                    <>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
                      Inctive
                    </span>
                    </>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/admin/get-user/${user?._id}`} className="text-secondary hover:text-secondary-800 mx-2">View</Link>
                    {/* <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Edit</a> */}
                    {user?.company?.user?.role == "user" ? <>
                    <button onClick={(e) => handleSubmit(e, "approve", user?.company?.user?._id)} className="text-accent hover:text-accent-800 mx-2">Approve</button>
                    </>  : <>
                    <button onClick={(e) => handleSubmit(e, "suspend", user?.company?.user?._id)} className="text-accent hover:text-accent-800 mx-2">Suspend</button>

                    </>}
                  </td>
                </tr>
                ))}
              
            </>
            
            }
               
              
                
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="z-10 bg-secondary border-secondary text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    3
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

  )
}

export default GetAllUser