import React, { useCallback, useEffect } from 'react'
import Sidebar from '../molecules/Sidebar'
import { DashboardStyle } from './Dashboard.style';
import { NavbarStyle } from '../molecules/molecule.style';
import Navbar from '../molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo } from '../../features/company/companySlice';
import { fetchProducts } from '../../features/products/productSlice';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => (
    state.user))
  const {company} = useSelector((state) =>(state.company))
  const {products, isLoading: productsLoading} = useSelector((state) =>(state.products))

  const fetchData = useCallback(() => {
    if(!products || !company){
      dispatch(companyInfo())
      dispatch(fetchProducts())
    }
  }, []);

  useEffect(() =>{
    fetchData();
  }, [fetchData])
  // console.log(company)
  if(productsLoading) return <h3>Loading...</h3>
  return (
    <>
    <Sidebar />
    <DashboardStyle>
      {company ? 
         <main className="main-content">
         <Navbar />
         <div className="content">
     
       <div className="stats-container">
         <div className="stat-card">
           <h3>Total Products</h3>
           <div className="number">{company.products}</div>
         </div>
         <div className="stat-card">
           <h3>Active Chatbots</h3>
           <div className="number">{company.chatbots}</div>
         </div>
         <div className="stat-card">
           <h3>Total Customers</h3>
           <div className="number">156</div>
         </div>
       </div>
       <h1>Products</h1>

       <div className="products-grid">
        {products?.data?.length ? (
          products.data.map((product, index) =>(
          <div className="chatbot-card" key={index}>
            <div className="chatbot-header">
              <div className="chatbot-title">{product.product_name}</div>
              <span className="status-badge">Active</span>
            </div>
            <div className="chatbot-stats">
              <div className="stat-item">
                <div className="stat-number">856</div>
                <div className="stat-label">Total Queries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
            <div className="chatbot-actions">
              <button className="btn">View Analytics</button>
              <button className="btn btn-outline">Settings</button>
            </div>
          </div>

          ))
        ) : (
          <h3>Loading ...</h3>
        )}
       </div>
       </div>
     </main>: 
     <h4>Loading....</h4>
    }
    </DashboardStyle>
    </>
  )
}

export default Dashboard;