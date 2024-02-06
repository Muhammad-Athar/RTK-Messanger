function Loader() {
    return (
        <div className="flex items-center justify-center text-2xl">
            <div className="animate-loading-dots">
                <span className="text-[20px] animate-loading-dot1">.</span>
                <span className="text-[20px] animate-loading-dot2">.</span>
                <span className="text-[20px] animate-loading-dot3">.</span>
            </div>
        </div>
    );
}

export default Loader;

