import React from 'react'
import Layout from '../Layout/Layout'
import Link from 'next/link'

const Footer = () => {
return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    '>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; Aryan</span>
            <div>
                Made by&nbsp;
            <Link href="https://github.com" target={'_blank'} className='underline underline-offset-2'>MAC</Link>
            </div>
            <Link href="https://github.com" target={'_blank'} className='underline underline-offset-2'>Say Hello!</Link>
        </Layout>
    </footer>
    )
}

export default Footer
