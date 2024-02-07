function Loader() {
    return (
        <div className="flex items-center justify-center text-2xl ">
            <div className="animate-loading-dots flex space-x-2">
                <span className="text-4xl bg-slate-700 h-5 w-5 rounded-full animate-loading-dot1"></span>
                <span className="text-4xl bg-slate-700 h-5 w-5 rounded-full animate-loading-dot2"></span>
                <span className="text-4xl bg-slate-700 h-5 w-5 rounded-full animate-loading-dot3"></span>
            </div>
        </div>
    );
}

export default Loader;
