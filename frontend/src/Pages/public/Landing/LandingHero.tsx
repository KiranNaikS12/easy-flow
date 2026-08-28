import { FlaskConical, GraduationCap, RadioTower, UserPen } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { cardVariants, containerVariants, textVarient } from '../../../constants/animation'


const LandingHero: React.FC = () => {
    return (
        <>
        <div className='min-h-screen bg-customGrey'>
            <div className='p-12'>
                <motion.div
                    className='flex justify-center'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className='grid grid-cols-1 gap-24 mt-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                        {[
                            {
                                icon: <GraduationCap size={24} className="text-theme" />,
                                title: "100+ Courses",
                                description: "Enroll in courses led by industry experts and gets hands-on experience with our platform."
                            },
                            {
                                icon: <FlaskConical size={24} className="text-theme" />,
                                title: "100+ Questions",
                                description: "Practice coding in real-time, enhance logic, try differnt solutions, and prepare effectively for interviews."
                            },
                            {
                                icon: <UserPen size={24} className="text-theme" />,
                                title: "100+ Tutors",
                                description: "Learn from experienced tutors who provide personalized guidance to enhance your skills."
                            },
                            {
                                icon: <RadioTower size={24} className="text-theme" />,
                                title: "Live Support",
                                description: "Connect seamlessly with live real-time chat and video call features for instant feedback and seamless learning."
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="flex flex-col items-center w-64 p-6 text-center"
                            >
                                <div className="p-4 mb-4 rounded-full bg-black">
                                    {card.icon}
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-black">
                                    {card.title}
                                </h3>

                                <p className="leading-relaxed text-gray-500 text-md">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={textVarient}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className='flex flex-col items-center mt-16 space-y-8'>
                <div>
                    <h1 className='text-3xl text-gray-400'>Unlock Your Coding Potential</h1>
                </div>
                <div className='flex flex-col items-center bread-words w-300'>
                    <p className='text-lg leading-relaxed text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut fugiat, est soluta non ex ratione nemo voluptatem fugit sapiente ipsam odio atque. Quisquam harum fuga ipsa animi non maxime exercitationem fugit? Modi, eaque aspernatur ipsa repudiandae illum enim necessitatibus aperiam atque, laboriosam quasi perferendis autem alias dignissimos facere culpa.</p>
                </div>
                <div >
                    <button className='px-3 py-2 border rounded-lg hover:shadow-lg border-highlightBlue text-hoverColor'>ENROLL NOW</button>
                </div>
            </motion.div>
        </div>
        
        </>
    )
}

export default LandingHero