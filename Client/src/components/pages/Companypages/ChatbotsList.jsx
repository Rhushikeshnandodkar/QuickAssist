import React, { useEffect } from 'react'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import { ChatbotListStyle } from './company.styled'
import Navbar from '../../molecules/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllbots, deleteChatbot } from '../../../features/chatbots/chatbotSlice'
import { Link } from 'react-router-dom'
import Loader from '../../molecules/Loader'

function ChatbotsList() {
    const dispatch = useDispatch()
    const { yourbots, isLoading } = useSelector((state) => state.chatbot) 

    useEffect(() => {
        dispatch(fetchAllbots())
    }, [dispatch])

    const handleDelete = (productId, uniqueId) => {
        if (window.confirm("Are you sure you want to delete this chatbot?")) {
            dispatch(deleteChatbot({ productId, uniqueId }))
        }
    }

    return (
        <ChatbotListStyle>
            <GlobalStyle />
            <Sidebar />
            <Navbar page="Chatbots" />
            <main className="main">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Chatbot Name</th>
                                <th>Created Date</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Operations</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <Loader />
                            ) : yourbots?.data?.map((data) => (
                                <tr key={data._id}>
                                    <td className="truncate">{data.product.product_name}</td>
                                    <td>{new Date(data.product.uploadedAt).toLocaleDateString()}</td>
                                    <td className="truncate">{data.useremail}</td>
                                    <td>
                                        <span className={`status-badge ${data.queriesUsed < 10 ? 'status-active' : 'status-pending'}`}>
                                            {data.queriesUsed < 10 ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>{data.queriesUsed}</td>
                                    <td>
                                        <div className="actions">
                                            <Link to={`/chatbot/${data.company._id}/${data.product._id}/${data.uniqueId}`} className="action-btn action-btn-primary" title="View">👁️</Link>
                                            <button
                                                className="action-btn action-btn-danger"
                                                title="Delete"
                                                onClick={() => handleDelete(data.product._id, data.uniqueId)}
                                            >🗑️</button>
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
    )
}

export default ChatbotsList
