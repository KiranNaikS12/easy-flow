import LandingHeader from "../../components/Headers/Landing"


const Landing = () => {
    return (
        <div className="w-full bg-cover" >

            {/* Landing Page Header */}
            <LandingHeader />

            <div className="mx-8 flex"  >

                {/* Landing: Section-1 */}
                <div className="flex flex-col h-screen items-baseline md:pt-56 gap-4 md:w-[60%] pt-12 shrink-0">
                    <span className="text-7xl tracking-tight font-bold">
                        Work Smarter. <span className="text-theme">Stay in Flow.</span>
                    </span>
                    <p className="text-lg max-w-4xl">
                        EasyFlow brings people, tasks, sessions, and progress together in one simple workspace. Whether you're managing a coaching center, a team, or a growing organization, EasyFlow helps you stay organized, keep everyone aligned, and get more done.
                    </p>

                    <h1 className="text-3xl mt-8 font-bold text-theme">Plan. Collaborate. Track. Grow.</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing
