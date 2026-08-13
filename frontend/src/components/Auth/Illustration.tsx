

const Illustration = () => {
    return (
        <div className="relative hidden w-105 shrink-0 bg-theme lg:block">

            {/* Top shape */}
            <div className="absolute -top-12 -left-12 h-32 w-125 -rotate-8 rounded-[30px] bg-[#61d9ad]" />

            {/* Bottom shape */}
            <div className="absolute -bottom-20 -left-5 h-72 w-150 rotate-[-24deg] rounded-[30px] bg-[#61d9ad]" />

        </div>
    )
}

export default Illustration
