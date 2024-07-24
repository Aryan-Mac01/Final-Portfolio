import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import passPic from '../../public/images/profile/dev.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills/Skills'
import Education from '@/components/Experience/Experience'

const AnimatedNumber = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    

    return <span ref={ref}></span>
}

const about = () => {
return (
    <>
        <Head>
            <title>Aryan Mishra | About Page</title>
            <meta name="description" content="Get to know Me!"/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center '>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Hi, I'm Aryan, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences. With 1 year of experience in the field. I am always looking for 
                            new and innovative ways to bring my visions to life.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty, it's about solving problems and 
                            creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on any website, I bring my commitment to design excellence and user-centered thinking to     
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={passPic} alt="MAC" className='w-full h-auto rounded-2xl'/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-between'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={20}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                        </div>
                    </div>
                </div>
            <Skills/>
            <Education/>
            </Layout>
        </main>
    </>
    )
}

export default about
