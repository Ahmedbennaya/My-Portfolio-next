"use client"; // This line makes the component a client component  

import { useState, useEffect } from 'react';  

export default function About() {  
  // Array of skills with corresponding proficiency levels  
  const skills = [  
    { name: "Web Development", level: 90 },  
    { name: "Figma", level: 80 },  
    { name: "NextJS", level: 85 },  
    { name: "GitHub", level: 90 },  
    { name: "CSS", level: 95 },  
    { name: "HTML", level: 95 },  
    { name: "JavaScript", level: 90 },  
    { name: "ReactJS", level: 90 },  
    { name: "Firebase", level: 80 },  
    { name: "GatsbyJS", level: 75 },  
    { name: "Web Design", level: 85 },  
    { name: "Tailwind CSS", level: 80 }  
  ];  

  const skillsToShow = 5;   
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % Math.ceil(skills.length / skillsToShow));  
    }, 3000); // Change every 3 seconds  

    return () => clearInterval(intervalId);   
  }, []);  

  const startIndex = currentSkillIndex * skillsToShow;  
  const currentSkills = skills.slice(startIndex, startIndex + skillsToShow); // Get the current skills to display  

  return (  
    <section className="w-full px-4 py-16 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] text-gray-900">  
      <div className="max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row items-center justify-between">  
        {/* Biography Section */}  
<div className="md:w-1/2">  
  <h2 className="text-3xl font-semibold mb-6 text-[#003366]">BIOGRAPHY</h2>  
  <p className="text-lg text-gray-700 mb-6">  
    Hello! My name is <span className="font-semibold text-gray-900">Ahmed Bennaya</span>. I'm a web developer and UI/UX designer who loves building websites and applications that are simple, functional, and user-friendly. I have a year of experience, mainly working with popular JavaScript libraries like React and Next.js to turn ideas into real-world products.  
  </p>  
  <p className="text-lg text-gray-700 mb-6">  
    I believe that good design is all about solving problems and making things easy and enjoyable for users, not just about looking nice. Whether I'm creating a website, an app, or any digital project, my goal is to ensure that it provides real value to its users and meets the needs of clients.  
  </p>  
  <p className="text-lg text-gray-700">  
    I'm excited to use my skills and passion to help you with your next project!  
  </p>  
</div>

          {/* Stats and Image Section */}  
          <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0">  
            <img  
              alt="portrait"  
              src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/347240984_6558379937547307_4719219808834246356_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ck4fSNJICNAQ7kNvgGWh2Eb&_nc_ht=scontent.ftun10-1.fna&_nc_gid=A6pbXHajOUn1ozojxm7ZcsI&oh=00_AYCiOtuEhvEsMNKvwzydsvDBtfJ5uBJI4ZZXNWwKM-GP5w&oe=66E60D21"  
              className="rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-4 border-[#003366]"  
            />  
            <div className="mt-8 grid grid-cols-3 gap-4">  
              <div className="text-center">  
                <div className="text-4xl font-bold text-[#003366]">2+</div>  
                <span className="text-gray-700">Satisfied Clients</span>  
              </div>  
              <div className="text-center">  
                <div className="text-4xl font-bold text-[#003366]">10+</div>  
                <span className="text-gray-700">Projects Completed</span>  
              </div>  
              <div className="text-center">  
                <div className="text-4xl font-bold text-[#003366]">1+</div>  
                <span className="text-gray-700">Years of Experience</span>  
              </div>  
            </div>  
          </div>  
        </div>  

        {/* Education Section */}  
        <div className="mt-16 bg-background p-8">  
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">EDUCATION</h2>  
          <p className="text-lg text-gray-700 mb-2">  
            Bachelor of Science in Computer Science  
          </p>  
          <p className="text-lg text-gray-700 mb-2">  
            University of Example, 2020  
          </p>  
          <p className="text-lg text-gray-700">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
          </p>  
        </div>  

        {/* Skills Section */}  
        <div className="flex flex-col items-center bg-background p-8 mt-16">  
          <h1 className="text-4xl font-bold text-foreground mb-6">Skills</h1>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">   
            {currentSkills.map((skill) => (  
              <div key={skill.name} className="w-full">  
                <div className="flex justify-between mb-2">  
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>  
                  <span className="text-gray-600">{skill.level}%</span>  
                </div>  
                <div className="bg-gray-200 rounded-full h-2">  
                  <div  
                    className={`bg-[#003366] h-2 rounded-full`}  
                    style={{ width: `${skill.level}%` }}  
                  ></div>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
}