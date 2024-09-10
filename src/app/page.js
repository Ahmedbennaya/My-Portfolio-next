'use client';  

import Image from 'next/image';  
import { motion } from 'framer-motion';  
import profilePic from '../../public/images/profile.jpg';  

export default function Home() {  
  return (  
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] text-gray-900">  
      {/* Left Content - Heading and Description */}  
      <motion.div  
        className="flex-1 md:pr-12"  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1 }}  
      >  
        <motion.h1  
          className="text-5xl font-extrabold mb-6 text-[#003366]" // Primary color for headings  
          initial={{ opacity: 0, x: -100 }}  
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1, ease: 'easeInOut' }}  
        >  
          Turning Vision Into Reality With Code And Design.  
        </motion.h1>  
        <p className="text-lg leading-relaxed mb-8 text-gray-700">  
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.  
        </p>  
        <div className="flex space-x-4">  
          <motion.a  
            href="/contact"  
            className="bg-[#003366] text-white px-4 py-2 rounded-lg shadow hover:bg-[#005A7F] transition duration-300" // Styled button  
            whileHover={{ scale: 1.05 }}  
          >  
            Contact  
          </motion.a>  
        </div>  
      </motion.div>  

      {/* Right Content - Profile Image */}  
      <motion.div  
        className="flex-1 mt-8 md:mt-0 flex justify-center"  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1 }}  
      >  
        <Image  
          src={profilePic}  
          alt="Profile Illustration"  
          width={350}  
          height={350}  
          className="rounded-full shadow-xl border-4 border-[#003366]" // Primary color for border  
        />  
      </motion.div>  
    </section>  
  );  
}