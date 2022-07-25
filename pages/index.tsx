import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col relative">
      <Head>
        <title>Sign Up Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/signup" >
        <button className='px-4 py-3 bg-[#6776FF] shadow-md rounded-full text-white font-semibold text-sm text-center focus:bg-white focus:text-[#6776FF] transition duration-150 ease-in-out'>Go to SignUp</button>
      </Link>
    </div>
  )
}

export default Home
