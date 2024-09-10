import Image from 'next/image';
import project1 from '../../../public/images/project1.jpg';
import project2 from '../../../public/images/project2.jpg';
import project3 from '../../../public/images/project3.jpg';
import project4 from '../../../public/images/project4.jpg';

export default function Projects() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#003366] mb-12">
          Featured Projects
        </h1>

        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Here’s a showcase of my recent work, highlighting projects that focus on great design, functionality, and user experience.
        </p>

        {/* Grid Layout for 4 Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-64 relative">
              <Image
                src={project1}
                alt="Project 1"
                className="object-cover w-full h-full transition-transform transform group-hover:scale-105 duration-300"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#003366]">Project 1</h2>
              <p className="mt-4 text-gray-700">
                A beautifully crafted e-commerce platform with a responsive product catalog and a seamless checkout system built using React & Next.js.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-64 relative">
              <Image
                src={project2}
                alt="Project 2"
                className="object-cover w-full h-full transition-transform transform group-hover:scale-105 duration-300"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#003366]">Project 2</h2>
              <p className="mt-4 text-gray-700">
                A portfolio website designed for a creative professional with elegant and user-friendly navigation. Built with CSS Grid for flexibility.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-64 relative">
              <Image
                src={project3}
                alt="Project 3"
                className="object-cover w-full h-full transition-transform transform group-hover:scale-105 duration-300"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#003366]">Project 3</h2>
              <p className="mt-4 text-gray-700">
                A social media app that enables users to connect and share content easily. Developed with a mobile-first approach and a real-time chat feature.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-64 relative">
              <Image
                src={project4}
                alt="Project 4"
                className="object-cover w-full h-full transition-transform transform group-hover:scale-105 duration-300"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#003366]">Project 4</h2>
              <p className="mt-4 text-gray-700">
                A task management tool designed to streamline team collaboration, featuring real-time task updates, chat integration, and an intuitive dashboard.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
