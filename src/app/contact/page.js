export default function Contact() {  
  return (  
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] text-gray-900">  
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">  
        <h1 className="text-5xl font-extrabold text-center mb-8 text-[#003366]">  
          Contact Me  
        </h1>  
        <form className="mt-10">  
          <div className="mb-6">  
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">  
              Your Name  
            </label>  
            <input  
              type="text"  
              id="name"  
              placeholder="Enter your name"  
              className="w-full p-3 border-2 border-[#003366] rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-[#005A7F] focus:border-[#005A7F]"  
              required  
            />  
          </div>  
          <div className="mb-6">  
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">  
              Your Email  
            </label>  
            <input  
              type="email"  
              id="email"  
              placeholder="Enter your email"  
              className="w-full p-3 border-2 border-[#003366] rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-[#005A7F] focus:border-[#005A7F]"  
              required  
            />  
          </div>  
          <div className="mb-6">  
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">  
              Your Message  
            </label>  
            <textarea  
              id="message"  
              placeholder="Write your message here"  
              className="w-full p-3 border-2 border-[#003366] rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-[#005A7F] focus:border-[#005A7F]"  
              rows="5"  
              required  
            ></textarea>  
          </div>  
          <button  
            type="submit"  
            className="w-full p-3 bg-[#003366] text-white rounded-lg hover:bg-[#005A7F] shadow-lg transition duration-300"  
          >  
            Send Message  
          </button>  
        </form>  
      </div>  
    </section>  
  );  
}