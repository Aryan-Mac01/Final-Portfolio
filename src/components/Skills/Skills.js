import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute '
            
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )

}

const Skills = () => {
return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark  text-light
            p-8 shadow-dark cursor-pointer '
            
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>
            <Skill name="CSS" x="-5vw" y="-11vw"/>
            <Skill name="HTML" x="-25vw" y="2vw"/>
            <Skill name="JavaScript" x="23vw" y="6vw"/>
            <Skill name="NodeJS" x="0vw" y="12vw"/>
            <Skill name="ExpressJS" x="-30vw" y="-7vw"/>
            <Skill name="MongoDB" x="15vw" y="-12vw"/>
            <Skill name="Mongoose" x="32vw" y="-5vw"/>
            <Skill name="ReactJS" x="0vw" y="-19vw"/>
            <Skill name="NextJS" x="-25vw" y="-18vw"/>
            <Skill name="GSAP" x="-18vw" y="20vw"/>
            <Skill name="Tailwind CSS" x="27vw" y="15vw"/>
            <Skill name="Django" x="10vw" y="18vw"/>
            <Skill name="Bootstrap" x="23vw" y="-18vw"/>
            <Skill name="C++" x="-13vw" y="0vw"/>
            <Skill name="Python" x="13vw" y="0vw"/>
            <Skill name="GIT" x="-12vw" y="9vw"/>

        </div>
    </>
    )
}

export default Skills
