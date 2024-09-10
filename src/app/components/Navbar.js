'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const NAV_CLASS = "bg-background p-4 flex justify-between items-center";
const LINK_CLASS = "text-foreground hover:text-muted-foreground";

const SocialLink = ({ alt, imgSrc, href }) => (
  <a href={href} className={LINK_CLASS} target="_blank" rel="noopener noreferrer">
    <Image src={imgSrc} alt={alt} width={24} height={24} className="h-6 w-6" />
  </a>
);

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Social Media Icons on the left */}
        <div className="flex space-x-4">
          <SocialLink href="https://twitter.com/AhmedBennaya" alt="Twitter" imgSrc="/images/twitter-icon.png" />
          <SocialLink href="https://github.com/Ahmedbennaya" alt="GitHub" imgSrc="/images/github-icon.png" />
          <SocialLink href="https://linkedin.com/in/Ahmedbennaya" alt="LinkedIn" imgSrc="/images/linkedin-icon.png" />
          <SocialLink href="https://pinterest.com/yourusername" alt="Pinterest" imgSrc="/images/pinterest-icon.png" />
        </div>

        {/* "AB" in the center */}
        <div className="text-foreground font-bold text-xl">
          AB
        </div>

        {/* Navigation links on the right */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={LINK_CLASS}>Home</Link>
          <Link href="/about" className={LINK_CLASS}>About</Link>
          <Link href="/projects" className={LINK_CLASS}>Projects</Link>
          <Link href="/contact" className={LINK_CLASS}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setNavbar(!navbar)}
        >
          <Image src="/menu-icon.svg" alt="Menu" width={30} height={30} />
        </button>

        {/* Mobile Navigation Menu */}
        <ul
          className={`${
            navbar ? 'block' : 'hidden'
          } md:hidden space-y-4 mt-4`}
        >
          <li><Link href="/" className={LINK_CLASS}>Home</Link></li>
          <li><Link href="/about" className={LINK_CLASS}>About</Link></li>
          <li><Link href="/projects" className={LINK_CLASS}>Projects</Link></li>
          <li><Link href="/contact" className={LINK_CLASS}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
