import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex justify-center">
            <button className="bg-slate-300 px-5 py-2 rounded-lg ">
                <Link to="/messages">Go to Messages</Link>
            </button>
        </div>
    );
}

export default Home;
