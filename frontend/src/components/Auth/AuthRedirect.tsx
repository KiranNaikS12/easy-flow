import { Link } from "react-router-dom"
import type { AuthRedirectProps } from "../../types/authTypes/authRedirectTypes"



const AuthRedirect = ({message, linkText, linkTo} : AuthRedirectProps) => {
    return (
        <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
                {message}{" "}
                <Link to={linkTo} className="text-blue-500">
                    {linkText}
                </Link>
            </p>
        </div>
    )
}

export default AuthRedirect
