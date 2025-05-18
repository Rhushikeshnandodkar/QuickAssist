import React, { useEffect } from 'react'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'
import GlobalStyle from '../../molecules/gloable.style'
import { SettingStyle } from './company.styled'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo, getUsageInfo } from '../../../features/company/companySlice'
import Loader from '../../molecules/Loader'
function SubscriptionInfo() {
    // const isLoading = false
    const dispatch = useDispatch()
    const {isLoading, company, usageInfo} = useSelector((state) => state.company)
    useEffect(() =>{
        if(!company){
            dispatch(companyInfo())
        }
    }, [dispatch, company])

    useEffect(() => {
        if (company?.data?._id) {
          const companyId = company.data._id;
          console.log(companyId)
          dispatch(getUsageInfo(companyId)); // if you want to fetch usage info
        }
        console.log(usageInfo)
    }, [company, dispatch])

  return (
    <>
    <GlobalStyle/>
    {/* <Navbar/> */}
    <Sidebar/>
        <SettingStyle>
    <div className="main-content">
                <Navbar page="Settings" />
                <div className="content">
                <div className="tabs-container">
                                        <div className="tabs">
                                            <div className="tab active">Subscription</div>
                                            <Link to={'/settings'} className="tab ">Company Profile</Link>
                                        </div>
                                    </div>
                {isLoading || !usageInfo ? (
                           <Loader/>
                        ) : (
                    <div>
                    <div className="bg-white rounded-xl shadow-custom p-6 mb-6">
                        <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Token Usage</h2>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Free Plan</span>
                        </div>
                        <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Available Queries</div>
                            <div className="flex items-end">
                                <span className="text-2xl font-semibold">{usageInfo.data.queries_used}</span>
                                <span className="text-sm text-gray-500 ml-2">Queries</span>
                            </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Tokens Used This Month</div>
                            <div className="flex items-end">
                                <span className="text-2xl font-semibold">{usageInfo.data.tokens_used}</span>
                                <span className="text-sm text-gray-500 ml-2">tokens</span>
                            </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Next Refresh</div>
                            <div className="flex items-end">
                                <span className="text-2xl font-semibold">June 15, 2025</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Monthly Usage</span>
                            <span className="text-sm text-gray-500">112,500 / 500,000 tokens (22.5%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-secondary h-2.5 rounded-full" style={{width: '22.5%'}} />
                        </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-custom p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-6">Usage Metrics</h2>
                        <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Tokens Used</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Total Queries</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Avg. Per Query</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-3 px-4 text-sm">May 15, 2025</td>
                                <td className="py-3 px-4 text-sm">3,245</td>
                                <td className="py-3 px-4 text-sm">42</td>
                                <td className="py-3 px-4 text-sm">77.3</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-sm">May 14, 2025</td>
                                <td className="py-3 px-4 text-sm">5,120</td>
                                <td className="py-3 px-4 text-sm">67</td>
                                <td className="py-3 px-4 text-sm">76.4</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-sm">May 13, 2025</td>
                                <td className="py-3 px-4 text-sm">4,876</td>
                                <td className="py-3 px-4 text-sm">53</td>
                                <td className="py-3 px-4 text-sm">92.0</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-sm">May 12, 2025</td>
                                <td className="py-3 px-4 text-sm">6,234</td>
                                <td className="py-3 px-4 text-sm">78</td>
                                <td className="py-3 px-4 text-sm">79.9</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-sm">May 11, 2025</td>
                                <td className="py-3 px-4 text-sm">2,987</td>
                                <td className="py-3 px-4 text-sm">34</td>
                                <td className="py-3 px-4 text-sm">87.9</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-custom p-6 mb-6">
                        <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Billing History</h2>
                        <a href="#" className="text-sm text-secondary font-medium hover:underline">Download All Invoices</a>
                        </div>
                        <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Invoice</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                                <th className="py-3 px-4 text-sm font-medium text-gray-500">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-4 px-4 text-sm">INV-2025-0512</td>
                                <td className="py-4 px-4 text-sm">May 12, 2025</td>
                                <td className="py-4 px-4 text-sm">$49.99</td>
                                <td className="py-4 px-4 text-sm">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid</span>
                                </td>
                                <td className="py-4 px-4 text-sm">
                                <a href="#" className="text-secondary hover:underline">Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-4 text-sm">INV-2025-0412</td>
                                <td className="py-4 px-4 text-sm">April 12, 2025</td>
                                <td className="py-4 px-4 text-sm">$49.99</td>
                                <td className="py-4 px-4 text-sm">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid</span>
                                </td>
                                <td className="py-4 px-4 text-sm">
                                <a href="#" className="text-secondary hover:underline">Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-4 text-sm">INV-2025-0312</td>
                                <td className="py-4 px-4 text-sm">March 12, 2025</td>
                                <td className="py-4 px-4 text-sm">$49.99</td>
                                <td className="py-4 px-4 text-sm">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid</span>
                                </td>
                                <td className="py-4 px-4 text-sm">
                                <a href="#" className="text-secondary hover:underline">Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-4 text-sm">INV-2025-0212</td>
                                <td className="py-4 px-4 text-sm">February 12, 2025</td>
                                <td className="py-4 px-4 text-sm">$39.99</td>
                                <td className="py-4 px-4 text-sm">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid</span>
                                </td>
                                <td className="py-4 px-4 text-sm">
                                <a href="#" className="text-secondary hover:underline">Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-4 text-sm">INV-2025-0112</td>
                                <td className="py-4 px-4 text-sm">January 12, 2025</td>
                                <td className="py-4 px-4 text-sm">$39.99</td>
                                <td className="py-4 px-4 text-sm">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid</span>
                                </td>
                                <td className="py-4 px-4 text-sm">
                                <a href="#" className="text-secondary hover:underline">Download</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-custom p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-6">Current Plan</h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-medium">Pro Plan</span>
                            <span className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded">Current</span>
                            </div>
                            <div className="text-2xl font-semibold mb-1">$49.99<span className="text-sm text-gray-500 font-normal">/month</span></div>
                            <p className="text-gray-500 text-sm mb-4">Your plan renews on June 15, 2025</p>
                            <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-sm">
                                <span className="material-symbols-rounded text-green-500 mr-2">check_circle</span>
                                500,000 tokens per month
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="material-symbols-rounded text-green-500 mr-2">check_circle</span>
                                Unlimited chatbot instances
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="material-symbols-rounded text-green-500 mr-2">check_circle</span>
                                Advanced analytics
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="material-symbols-rounded text-green-500 mr-2">check_circle</span>
                                Priority support
                            </li>
                            </ul>
                            <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium text-sm">Upgrade Plan</button>
                            <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm">Cancel Subscription</button>
                            </div>
                        </div>
                        <div className="w-full md:w-64 bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium text-sm mb-3">Payment Method</h3>
                            <div className="flex items-center mb-4">
                            <span className="material-symbols-rounded mr-3 text-gray-500">credit_card</span>
                            <div>
                                <div className="font-medium text-sm">Visa ending in 4242</div>
                                <div className="text-xs text-gray-500">Expires 05/2026</div>
                            </div>
                            </div>
                            <button className="text-secondary text-sm font-medium hover:underline">Update payment method</button>
                        </div>
                        </div>
                    </div>
                    </div>

                        )}
                </div>
            </div>
    </SettingStyle>
    </>
  )
}

export default SubscriptionInfo