import Controls from "./components/Controls.jsx";
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Iphone from "./components/Iphone.jsx";
import Macbook from "./components/Macbook.jsx";
import Watch from "./components/Watch.jsx";
import IMac from "./components/IMac.jsx";

const App = () => {
    const [frameZoom, setFrameZoom] = useState(false)
    const [activePage, setActivePage] = useState(0);

    const toggleZoom = () => {
        setFrameZoom(!frameZoom);
    }

    const handleNavClick = (pageIndex) =>{
        setActivePage(pageIndex);
    }

    return (
        <div className="w-full h-screen grid place-items-center">
            <div
                className={`${frameZoom && 'min-w-[97-vw] min-h-[97vh]'} "
                w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw]
                max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-300 flex 
                "`}
            >
                <Navbar activePage={activePage} handleNavClick={handleNavClick} />
                <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
                <div className={"flex-grow"}>
                    {/*<Home/>*/}
                    {/*<Iphone/>*/}
                    {/*<Macbook/>*/}
                    {/*<Watch/>*/}
                    <IMac/>
                </div>
            </div>
        </div>
    )
}
export default App
