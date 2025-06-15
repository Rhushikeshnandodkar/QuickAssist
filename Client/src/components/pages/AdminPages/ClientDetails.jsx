import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../molecules/Sidebar'
import AdminSideBar from '../../molecules/AdminSideBar'
import { useDispatch, useSelector } from 'react-redux'
import { companyDetails } from '../../../features/admin/adminSlice'
import Loader from '../../molecules/Loader'

function ClientDetails() {
    const {userId} = useParams()
    const dispatch = useDispatch()

    const {company_data, isLoading} = useSelector((state) => state.admin)

    useEffect(() =>{
        dispatch(companyDetails(userId))
    }, [dispatch])

    if(isLoading){
        return <Loader/>
    }
  return (
    <div class="flex min-h-screen">
        <AdminSideBar/>
    <main class="flex-1 px-10 py-8">
      <div class="max-w-3xl mx-auto bg-white rounded shadow-md p-8">
        <div class="flex items-center gap-6 mb-8">
          <span class="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl font-bold">JD</span>
          <div>
            <h2 class="text-2xl font-bold mb-1">{company_data?.data?.company?.user?.name}</h2>
            <div class="text-gray-500 mb-1">{company_data?.data?.company?.company_name}</div>
            {company_data?.data?.company?.user?.role == "company" ? <>
            <span class="bg-green-100 text-green-700 rounded px-3 py-1 text-xs">Active</span>
            </> : <>
            <span class="bg-red-100 text-white-700 rounded px-3 py-1 text-xs">Inactive</span>
            </>}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Email</div>
            <div class="font-mono text-gray-800">{company_data?.data?.company?.user?.email}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Phone</div>
            <div class="font-mono text-gray-800">+91 {company_data?.data?.company?.company_contact}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Website</div>
            <div class="font-mono text-gray-800">{company_data?.data?.company?.company_website}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Current Plan</div>
            <div class="font-mono text-gray-600">{company_data?.data?.purchase?.plan}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Token Info</div>
            <div class="font-mono text-gray-800">{company_data?.data?.tokens_used}/{company_data?.data?.company?.total_tokens}</div>
          </div>
          <div>
            <div class="text-xs text-gray-400 uppercase mb-1">Expiry Date</div>
            <div class="font-mono text-gray-800">{new Date(company_data?.data?.purchase?.nextBillingDate).toLocaleDateString()}</div>
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-1">Address</div>
          <div class="font-mono text-gray-800 mb-4">{company_data?.data?.company?.address}</div>
        </div>
        <div class="flex items-center mt-6 gap-4">
          <Link to={"/admin/get-users"} class="bg-gray-100 hover:bg-gray-200 rounded px-4 py-2 text-gray-700 font-semibold">Back to Users</Link>
          {/* <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 font-semibold">Edit User</a> */}
          {/* <a href="#" class="bg-red-100 hover:bg-red-200 text-red-700 rounded px-4 py-2 font-semibold">Delete User</a> */}
        </div>
      </div>
    </main>
  </div>
  )
}

export default ClientDetails