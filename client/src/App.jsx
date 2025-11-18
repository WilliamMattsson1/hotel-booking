import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = () => {
    const isOwnerPath = useLocation().pathname.includes('owner')

    return (
        <>
            {!isOwnerPath && <Navbar />}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
