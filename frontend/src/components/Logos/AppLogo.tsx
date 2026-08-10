

const AppLogo = ({textDimension, logoDimension}) => {

    
    return (
        <>
            <a href="" className="flex items-center gap-1 shrink-0">
                <span className="flex justify-center items-center h-8 w-8 rounded-lg bg-[#1C1F2E]">
                    <span className={`h-${logoDimension} w-${logoDimension} rounded-full bg-theme`} />
                </span>
                <span className={`text-${textDimension}xl font-semibold text-[#1C1F2E] tracking-tight`}>
                    easy<span className="text-theme font-bold">FLOW</span>
                </span>
            </a>
        </>
    )
}

export default AppLogo;