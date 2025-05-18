import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { companyInfo, createPurchase } from '../../../features/company/companySlice';
function PurchasePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {company} = useSelector((state) => state.company)
    const [companyId, setCompanyId] = useState(null);   
    useEffect(() =>{
        if(!company){
            dispatch(companyInfo())
            // const companyId = company?.data?._id 
        }else{
            const id = company?.data?._id;
            if (id) setCompanyId(id);
        }
    }, [company, dispatch])
    const handlePurchase = (plan) => {
    //   const companyId = localStorage.getItem("companyId"); // or pass it via props/context
      dispatch(createPurchase({ companyId, plan }))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error("Purchase failed:", err);
        });
    };
  return (
    <main>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-primary mb-4">Choose Your Plan</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the perfect plan for your business needs. Start with our free tier and upgrade as you grow.
            </p>
        </div>

        <div class="flex justify-center mt-8 mb-12">
            <div class="relative inline-flex items-center">
                <span class="mr-4 text-sm font-medium text-gray-700">Monthly</span>
                <div class="w-14 h-7 bg-gray-300 rounded-full px-1 flex items-center cursor-not-allowed opacity-60">
                    <div class="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-0"></div>
                </div>
                <span class="ml-4 text-sm font-medium text-gray-400">Annually <span class="text-xs text-accent">(Coming Soon)</span></span>
            </div>
        </div>

        <div class="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden lg:flex lg:flex-col">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div class="flex items-center justify-center">
                        <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-secondary bg-opacity-10 text-secondary">
                            Free
                        </h3>
                    </div>
                    <div class="mt-4 flex justify-center">
                        <span class="text-5xl font-extrabold text-gray-900">$0</span>
                        <span class="ml-1 text-xl font-semibold text-gray-500 self-end">/month</span>
                    </div>
                    <p class="mt-5 text-lg text-gray-500 text-center">Perfect for getting started with digital manuals</p>
                </div>
                <div class="px-6 pt-6 pb-8 bg-white sm:p-10 lg:flex-1 lg:flex lg:flex-col">
                    <div class="flex-1">
                        <ul role="list" class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">1 manual product</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Basic analytics</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Up to 500 views/month</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Email support</p>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                    <button
          onClick={() => handlePurchase("Free")}
          className="block w-full bg-black text-white text-center px-4 py-3 rounded-md text-sm font-medium"
        >          Buy Standard
        </button>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-secondary lg:flex lg:flex-col">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div class="flex items-center justify-center">
                        <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-secondary bg-opacity-10 text-secondary">
                            Standard
                        </h3>
                        <span class="ml-4 inline-flex px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-accent text-white">
                            Popular
                        </span>
                    </div>
                    <div class="mt-4 flex justify-center">
                        <span class="text-5xl font-extrabold text-gray-900">$49</span>
                        <span class="ml-1 text-xl font-semibold text-gray-500 self-end">/month</span>
                    </div>
                    <p class="mt-5 text-lg text-gray-500 text-center">Great for growing businesses</p>
                </div>
                <div class="px-6 pt-6 pb-8 bg-white sm:p-10 lg:flex-1 lg:flex lg:flex-col">
                    <div class="flex-1">
                        <ul role="list" class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">10 manual products</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Advanced analytics</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Up to 5,000 views/month</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Priority support</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Custom branding</p>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <button class="block w-full bg-gray-300 text-white text-center px-4 py-3 rounded-md text-sm font-medium cursor-not-allowed">
                            Coming Soon
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden lg:flex lg:flex-col">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div class="flex items-center justify-center">
                        <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-secondary bg-opacity-10 text-secondary">
                            Enterprise
                        </h3>
                    </div>
                    <div class="mt-4 flex justify-center">
                        <span class="text-5xl font-extrabold text-gray-900">$199</span>
                        <span class="ml-1 text-xl font-semibold text-gray-500 self-end">/month</span>
                    </div>
                    <p class="mt-5 text-lg text-gray-500 text-center">For large organizations with complex needs</p>
                </div>
                <div class="px-6 pt-6 pb-8 bg-white sm:p-10 lg:flex-1 lg:flex lg:flex-col">
                    <div class="flex-1">
                        <ul role="list" class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Unlimited manual products</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Enterprise analytics</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Unlimited views</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Dedicated account manager</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">Custom integrations</p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-700">API access</p>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <button class="block w-full bg-gray-300 text-white text-center px-4 py-3 rounded-md text-sm font-medium cursor-not-allowed">
                            Coming Soon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-primary text-center mb-12">Frequently Asked Questions</h2>
            <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <div class="py-6">
                    <dt class="text-lg font-medium text-gray-900">
                        Can I upgrade my plan later?
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                        Yes, you can upgrade your plan at any time as your business grows. Your account will be immediately upgraded and you'll have access to all the features of your new plan.
                    </dd>
                </div>
                <div class="py-6">
                    <dt class="text-lg font-medium text-gray-900">
                        Is there a contract or can I cancel anytime?
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                        There are no long-term contracts. All plans are month-to-month and you can cancel or change your subscription at any time without penalty.
                    </dd>
                </div>
                <div class="py-6">
                    <dt class="text-lg font-medium text-gray-900">
                        What payment methods do you accept?
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                        We accept all major credit cards. For Enterprise plans, we can also arrange for invoicing and bank transfers.
                    </dd>
                </div>
                <div class="py-6">
                    <dt class="text-lg font-medium text-gray-900">
                        What happens if I exceed my monthly views limit?
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                        We'll notify you when you're approaching your limit. If you go over, your manuals will still be accessible, but we'll suggest upgrading to a higher tier to continue receiving optimal performance.
                    </dd>
                </div>
            </div>
        </div>
    </div>
</main>


  )
}

export default PurchasePage