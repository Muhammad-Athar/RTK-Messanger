import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="flex flex-col space-y-4">
            <span>ERROR 404: Requested page isn&apos;t available</span>
            
            <Link
                className="bg-slate-300 px-5 py-2 rounded-lg text-xl w-fit font-semibold"
                to="/"
            >
                {" "}
                GO Back
            </Link>
        </div>
    );
}

export default PageNotFound;
