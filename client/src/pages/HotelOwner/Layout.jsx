import { Outlet } from 'react-router-dom'
import Navbar from '../../components/HotelOwner/Navbar'
import Sidebar from '../../components/HotelOwner/Sidebar'

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex h-full">
                <Sidebar />
                <div className="flex-1 p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
