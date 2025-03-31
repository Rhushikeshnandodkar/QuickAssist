import React, { useEffect } from 'react'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import { ChatbotListStyle } from './company.styled'
import Navbar from '../../molecules/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllbots } from '../../../features/chatbots/chatbotSlice'
import { Link } from 'react-router-dom'

function ChatbotsList() {
    const dispatch = useDispatch()
    const {yourbots, isLoading} = useSelector((state) => state.chatbot) 
    useEffect(() =>{
        dispatch(fetchAllbots())
        console.log(yourbots)
    }, [dispatch])
  return (
    <>
    <ChatbotListStyle>
        <GlobalStyle />
        <Sidebar />
        <Navbar/>
        <main className="main">
        <div className="page-header">
            <h1 className="page-title">My Chatbots</h1>
            <div className="page-actions">
            <button className="btn btn-primary">
                <span>+ New Chatbot</span>
            </button>
            </div>
        </div>
        <div className="search-box">
            <input type="text" className="search-input" placeholder="Search chatbots..." />
            <span className="search-icon">🔍</span>
        </div>
        <div className="table-container">
            <table className="table">
            <thead>
                <tr>
                <th>Chatbot Name</th>
                <th>Created Date</th>
                {/* <th>Manual Source</th> */}
                <th>Customer</th>
                <th>Status</th>
                <th>Operations</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {isLoading ? (
                  <tr>Loading..</tr>
                ) : yourbots.data.map((data) =>(
                    <tr key={data._id}>
                    <td className="truncate">{data.product.product_name}</td>
                    <td>{data.product.uploadedAt}</td>
                    <td className="truncate">{data.useremail}</td>
                    {data.queriesUsed < 10 ? 
                    <td><span class="status-badge status-active">Active</span></td> : 
                    <td><span class="status-badge status-pending">Inactive</span></td>
                    }
                    <td>{data.queriesUsed}</td>
                    <td>
                        <div className="actions">
                        {/* <button className="action-btn action-btn-primary" title="Edit">✏️</button> */}
                        <Link to={`/chatbot/${data.company._id}/${data.product._id}/${data.uniqueId}`} className="action-btn action-btn-primary" title="View">👁️</Link>
                        <button className="action-btn action-btn-danger" title="Delete">🗑️</button>
                        </div>
                    </td>
                    </tr>
                ))}

               
              
               
                
               
            </tbody>
            </table>
        </div>
        <div className="pagination">
            <button className="pagination-btn">⟨</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">⟩</button>
        </div>
        <button className="fab">+</button>
        <div className="help-widget">
            <button className="help-trigger">?</button>
        </div>
        </main>
        </ChatbotListStyle>
    </>
  )
}

export default ChatbotsList