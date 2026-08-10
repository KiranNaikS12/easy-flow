import AppLogo from "../../components/Logos/AppLogo"


const Signup = () => {
    return (
        <div className="flex pt-64 px-12">

            {/* Text and Logo */}
            <div className="flex flex-col gap-6">
                <h1 className="text-8xl font-bold uppercase text-theme">Welcome...</h1>
                <AppLogo textDimension={8} logoDimension={8.5}/>
            </div>

        </div>
    )
}

export default Signup
