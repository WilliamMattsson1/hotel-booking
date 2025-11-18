import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

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
        </>
    )
}

export default App
