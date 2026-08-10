import LandingHeader from "../../components/Headers/Landing"
import { motion } from "framer-motion"
import { bounceEffect, bounceEffect2, premiumShimmer } from "../../constants/animation"
import {  useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full ">

            {/* Landing Page Header */}
            <LandingHeader />
            <div className="mx-8 flex -mt-7.5 justify-center" >

                {/* Landing: Section-1 */}
                <div className="flex min-h-screen w-full shrink-0 flex-col items-center px-4  sm:px-2 sm:pt-24 md:px-8 md:pt-32 lg:pt-36 ">
                    <motion.p
                        className="mt-6 flex max-w-4xl items-start justify-center text-center text-base font-medium text-black sm:mt-8 sm:text-lg gap-2 md:gap-2 sm:gap-"
                        initial={bounceEffect.initialStyles}
                        animate={bounceEffect.animate}
                        transition={bounceEffect.transition}
                    >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-theme sm:mt-2.5 sm:h-2.5 sm:w-2.5 -ml-6" />
                        <span >Everything Your Team Needs, In One Flow</span>
                    </motion.p>

                    <motion.h1
                        style={premiumShimmer.initialStyles}
                        animate={premiumShimmer.animate}
                        transition={premiumShimmer.transition}
                        className="mt-3 max-w-full px-2 text-center text-[clamp(2.75rem,7vw,9rem)] font-bold leading-[0.95] tracking-tight text-transparent bg-clip-text sm:mt-2 md:px-0 lg:whitespace-nowrap"
                    >
                        Work Smarter. Stay in Flow.
                    </motion.h1>

                    <motion.p
                        initial={bounceEffect.initialStyles}
                        animate={bounceEffect.animate}
                        transition={bounceEffect.transition}
                        className="mt-6 max-w-3xl px-2 text-center text-base font-normal leading-relaxed text-gray-500 sm:mt-8 sm:px-4 sm:text-lg"
                    >
                        EasyFlow brings people, tasks, sessions, and progress together in one simple workspace. Whether you're managing a coaching center, a team, or a growing organization, EasyFlow helps you stay organized, keep everyone aligned, and get more done.
                    </motion.p>

                    <motion.h2
                        initial={bounceEffect.initialStyles}
                        animate={bounceEffect.animate}
                        transition={bounceEffect.transition}
                        className="mt-6 text-center text-2xl font-bold text-theme sm:mt-8 sm:text-3xl"
                    >
                        Plan. Collaborate. Track. Grow.
                    </motion.h2>

                    <motion.div
                        initial={bounceEffect2.initialStyles}
                        animate={bounceEffect2.animate}
                        transition={bounceEffect2.transition}
                        className="flex items-center gap-4 mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 rounded-xl bg-theme text-white font-semibold shadow-lg shadow-theme/25 hover:shadow-xl hover:shadow-theme/30 transition-shadow cursor-pointer"
                            onClick={() => navigate('/signup')}
                        >
                            Get Started Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 rounded-xl border border-gray-500 text-gray-700 font-semibold bg-white/70 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"            
                        >
                            See How It Works
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Landing
