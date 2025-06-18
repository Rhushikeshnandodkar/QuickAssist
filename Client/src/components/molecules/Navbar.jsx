import React, { useEffect } from 'react'
import { NavbarStyle } from './molecule.style'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GlobalStyle from './gloable.style'

function Navbar(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)
    const { company } = useSelector((state) => state.company)
    const userData = user?.data;

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    const handleLogout = () => {
        // Optional: dispatch logout action if you have it
        // dispatch(logoutUser());
        localStorage.clear();
        navigate('/login');
    }

    return (
        <NavbarStyle>
            <GlobalStyle />
            <div className="header flex justify-between items-center px-4 py-2 bg-white shadow-md">
                <div className="page-title text-xl font-semibold text-gray-800">
                    {props.page}
                </div>
                <div className="header-actions flex items-center space-x-4">
                    <ul className="flex items-center space-x-4">
                        {user ? (
                            <li className="text-gray-700 font-medium">
                                <b>Welcome {user.name}</b>
                            </li>
                        ) : (
                            <h4>loading...</h4>
                        )}
                    </ul>
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="border  text-red-500 text-sm px-4 py-2 rounded-md transition"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </NavbarStyle>
    )
}

export default Navbar
