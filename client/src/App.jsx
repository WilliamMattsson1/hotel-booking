import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'

const App = () => {
    const isOwnerPath = useLocation().pathname.includes('owner')

    return (
        <>
            {!isOwnerPath && <Navbar />}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/rooms" element={<AllRooms />} />
                    <Route path="/rooms/:id" element={<RoomDetails />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
