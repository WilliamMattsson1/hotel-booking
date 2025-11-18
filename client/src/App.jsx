import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'

const App = () => {
    const isOwnerPath = useLocation().pathname.includes('owner')

    return (
        <>
            {!isOwnerPath && <Navbar />}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/rooms" element={<AllRooms />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
