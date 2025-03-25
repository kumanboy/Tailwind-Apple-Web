import Controls from "./components/Controls.jsx";
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    const [frameZoom, setFrameZoom] = useState(false)

    const toggleZoom = () => {
        setFrameZoom(!frameZoom);
    }

    return (
        <div className="w-full h-screen grid place-items-center">
            <div
                className={`${frameZoom && 'min-w-[97-vw] min-h-[97vh]'} "
                w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw]
                max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-300
                "`}
            >
                <Navbar/>
                <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
            </div>
        </div>
    )
}
export default App
