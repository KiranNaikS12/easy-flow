import type { GoogleSignInProps } from "../../types/authTypes/googleAuthTypes"


const GoogleSignIn = ({onClick}: GoogleSignInProps) => {
    return (
        <div className="flex items-center justify-center mt-4">
            <img src="images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            <span
                className="text-sm cursor-pointer text-themeColor hover:text-blue-600"
                onClick={onClick}
            >
                Sign up with Google
            </span>
        </div>
    )
}

export default GoogleSignIn
