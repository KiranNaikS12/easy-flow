import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManagerHeader = () => {
    return (
        <header className="top-0 z-50 w-full ">
            <div className="flex items-center justify-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-3xl">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input type="text" placeholder="Search anything..." className="h-11 w-full rounded-4xl bg-gray-200 border border-gray-300! pl-11 pr-4 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400!" />
                </div>
            </div>
        </header>

    )
}

export default ManagerHeader;