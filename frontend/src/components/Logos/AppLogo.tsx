import { Link } from "react-router-dom";

const AppLogo = () => {

    return (
        <>
            <Link to= "/" className="flex items-center gap-1 shrink-0 no-underline text-decoration-none">
                <span className="flex justify-center items-center h-8 w-8 rounded-lg bg-[#1C1F2E] ">
                    <span className="h-2.5 w-2.5 rounded-full bg-theme" />
                </span>
                <span className="text-xl font-semibold text-[#1C1F2E] tracking-tight d-sidebar-narrow-none">
                    easy<span className="text-theme font-bold">FLOW</span>
                </span>
            </Link>
        </>
    )
}

export default AppLogo;