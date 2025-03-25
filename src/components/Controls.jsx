const Controls = ({toggleZoom, frameZoom, resetPage, activePage}) => {
    return (
        <div className="absolute top-3 right-3 space-x-2 z-1">
            <button className="text-2xl text-blue-500 cursor-pointer hidden lg:inline-block" onClick={toggleZoom}>
                <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
            </button>
            <button className={`text-2xl ${activePage === 0 ? "text-pink-200 cursor-not-allowed":"text-blue-500 cursor-pointer"}`} onClick={resetPage}>
                <i className="bx bx-x-circle"></i>
            </button>
        </div>
    )
}
export default Controls
