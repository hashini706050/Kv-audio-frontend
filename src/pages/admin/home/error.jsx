import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
            <h1>404 Error: Page not found.</h1>
            <Link className="bg-[#3e8e4b] p-1 m-5" to="/">Go back to home</Link>
        </div>
        
    )
}