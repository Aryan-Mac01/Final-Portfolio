import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '../LiIcon/LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null) 
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )

}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-2 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="High-School"
                time="2018-2019"
                place="Oxford Model School"
                info="Relevant courses like Physics, Chemistry, Mathematics, Social Studies, Computer Sciences."
                
                />
                
                <Details
                type="Intermediate"
                time="2020-2021"
                place="Oxford Model School"
                info="Completed Intermediate Education from Computer Maths. Relevant courses Like Physics, Chemistry, Mathematics, Computer Sciences."

                />
                
                <Details
                type="Online Coursework"
                time="2022-2025"
                place="Udemy and Coursera"
                info="Completed coursework in advanceed topics like Web Development, UI/UX and multiple programming languages."
                />
                
                <Details
                type="Pursuing Bachelor Of Science In Computer Science"
                time="2021-2025"
                place="Pranveer Singh Institutes of Technology (PSIT)"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
                />
            </ul>
        </div>
        
    </div>
    )
}

export default Education
