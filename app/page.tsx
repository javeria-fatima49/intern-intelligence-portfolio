"use client"

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: "5",
    description:
      "HTML is the standard markup language for creating web pages. It provides the basic structure for web documents and helps in defining the content and structure of a web page.",
    color: "bg-[#E44D26]",
  },
  {
    name: "CSS",
    icon: "N",
    description:
      "CSS is used to style and layout web pages. It controls the look and feel of the web pages, including the design, colors, fonts, and spacing, making them visually appealing.",
    color: "bg-[#264DE4]",
  },
  {
    name: "Tailwind CSS",
    icon: "~",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows for rapid design and customization of web pages without writing custom CSS. It promotes consistency and efficiency in styling.",
    color: "bg-[#38B2AC]",
  },
  {
    name: "JavaScript",
    icon: "JS",
    description:
      "JavaScript is a versatile scripting language that enables interactive web features. It is used to create dynamic content, control multimedia, and handle events on web pages.",
    color: "bg-[#F7DF2E]",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, which improves code quality and development experience.",
    color: "bg-[#3178C6]",
  },
  {
    name: "React.js",
    icon: "⚛",
    description:
      "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    color: "bg-[#61DAFB]/80",
  },
  {
    name: "Next.js",
    icon: "N",
    description:
      "Next.js is a React framework that provides server-side rendering and static site generation capabilities. It helps in building optimized, fast, and scalable web applications.",
    color: "bg-[#FF8C00]",
  },
  {
    name: "Node.js",
    icon: "N",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and building scalable network applications using JavaScript.",
    color: "bg-[#339933]",
  },
];
export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={`min-h-screen w-full overflow-x-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`fixed top-0 w-full  backdrop-blur-sm z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black' }`}>
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/image/girl-image.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-2xl font-serif ">
              <span className="text-teal-500 font-extrabold font-serif text-3xl">J</span>averia
            </span>
            <span className="font-semibold text-2xl font-serif ">
              <span className="text-teal-500 font-extrabold font-serif text-3xl">P</span>ortfolio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Skills", "Projects","Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className=" hover:text-white transition-colors"
              >
                {item}
              </Link>
              
            ))}
                <button
        onClick={toggleTheme}
        className="fixed right-32 p-2 rounded-full text-white transition-transform hover:scale-110"
      >
        {isDarkMode ? "🌞" : "🌙 "}
      </button>  
          </div>

          <div className="md:hidden text-2xl">
          <button
        onClick={toggleTheme}
        className="rounded-full text-white transition-transform hover:scale-110"
      >
        {isDarkMode ? "🌞" : "🌙 "}
      </button>  
            <button onClick={toggleMobileMenu} className="focus:outline-none text-teal-400">
              &#9776;
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-4 py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            
          </div>
          
        )}
      </nav>
      <section id="home" className="pt-24 min-h-screen flex items-center animate-slideTop">
<div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-teal-500">
          Hello,
          <br />
          <Typewriter
            words={[" World!","I am Javeria Fatima!", "I am a web developer!", "I Love Coding!"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </h1>
      </div>
      <p className="max-w-lg">
      I&apos;m a passionate and dedicated IT student currently in my 2nd year, specializing in web development with expertise in 
      TypeScript, Next.js, and Tailwind CSS. I have experience in building interactive applications, including a resume builder,
       a to-do app, and an adventure game. I enjoy creating visually appealing and functional web solutions. I&apos;m always eager to
        learn new technologies and improve my skills. My goal is to contribute effectively to the tech industry and work on 
        innovative projects.
      </p>
      <div className="flex gap-4">
        <button className="rounded-full animate-bounce">
          <Link href="https://github.com/javeria-fatima49" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </button>
        <button   className="rounded-full  animate-bounce" >
          <Link href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDkXLXNMJQU2KvpnVM5TKCg%3D%3D" >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </button>
      </div>
    </div>
    <div className="relative w-full max-w-md h-4/6 aspect-[9/19.5] overflow-hidden">
      <Image
        src="/image/girl-image.jpg"
        alt="Profile Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-0 w-full h-6 b">
      </div>
    </div>
  </div>
</div>
</section>
<section id="about" className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 animate-accordion-up">
        
      <motion.h2
           className="text-3xl font-semibold text-teal-500 mb-6"
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
          <h2 className={`text-5xl font-bold mb-12 { ${isDarkMode ? 'text-white' : 'text-black'} text-center`}>
        <span className="text-teal-500"> About </span>Me
        </h2>   
         </motion.h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className=" text-lg sm:text-md">
              Hello! I&apos;m Javeria, a passionate learner currently in my second year of pre-medical studies.
              While my academic path is in pre-med, my curiosity for technology led me to explore web development.
              I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
              I love creating interactive and visually engaging applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="space-y-1">
                <p className=" text-sm">Name:</p>
                <p className="text-lg font-medium">Javeria Fatima</p>
              </div>
              <div className="space-y-1">
                <p className=" text-sm">Email:</p>
                <p className="text-lg font-medium">fatimajaveria409@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm">Location:</p>
                <p className="text-lg font-medium">Karachi, Pakistan</p>
              </div>
              <div className="space-y-1">
                <p className=" text-sm">Availability:</p>
                <p className="text-lg font-medium">Open for Work</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "10+", label: "Happy Clients" },
              { value: "5+", label: "Certifications" },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-700 border-gray-800 text-center p-4">
                <CardHeader>
                  <CardTitle className="text-3xl sm:text-4xl font-bold text-teal-500">{item.value}</CardTitle>
                  <CardDescription className=" text-sm sm:text-md">{item.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section id="skills" className="py-20 ">
      <div className="container px-4 mx-auto">
      <motion.h2
           className="text-3xl font-semibold text-teal-500 mb-6"
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
          <h2 className={`text-5xl font-bold mb-12 { ${isDarkMode ? 'text-white' : 'text-black'} text-center`}>
          My <span className="text-teal-500"> Skills </span>
        </h2>   
         </motion.h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
         <Card
           key={skill.name}
           className={`${skill.color} border-none text-white overflow-hidden group transition-transform duration-300 hover:scale-105`}
           data-aos="fade-up"
           data-aos-delay={index * 100}  
           data-aos-once="false" 
         >
              <CardContent className="pt-6 px-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center animate-pulse">
                    <span className="text-4xl font-bold animate-spin">{skill.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}     
           </div>
            </div>  
            </section>  
       <section className="py-16" id="projects">
         <motion.h2
           className="text-3xl font-semibold text-teal-500 mb-6"
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
          <h2 className={`text-5xl font-bold mb-12 { ${isDarkMode ? 'text-white' : 'text-black'} text-center`}>
          My <span className="text-teal-500">Projects</span>
        </h2>  
          </motion.h2>     
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">         {[       
            { id: '1', title: 'Milestone 1', description: 'The first milestone of my project, developed with HTML/CSS, focusing on creating the foundationalstructure and layout.', image: "/image/milestone 1.png", gitlink: "https://github.com/javeria-fatima49/resume.git", vercel: "http://resume-kohl-nine.vercel.app/" },
            { id: '2', title: 'Milestone 2', description: 'Milestone 2 highlights my skills in building dynamic, interactive elements using HTML/CSS while ensuring a smooth and responsive user experience.', image: "/image/milestone 2.png", gitlink: "https://github.com/javeria-fatima49/milestone-3.git", vercel: "https://milestone-3-one-henna.vercel.app/" },
            { id: '3', title: 'Milestone 3', description: 'In Milestone 3, I added functionality to generate user-specific content dynamically, using HTML/CSS, to enhance the overall interactivity of the project.', image: "/image/milestone 3.png", gitlink: "https://github.com/javeria-fatima49/milestone-4.git", vercel: "https://milestone-4-orpin.vercel.app/" },
            { id: '4', title: 'Calculator', description: 'A responsive calculator app built with HTML and CSS.It demonstrates my skills in creating clean, interactive user interfaces with dynamic functionality.', image: "/image/calculator.png", gitlink: "https://github.com/javeria-fatima49/calculator-.git", vercel: "https://calculator-vert-ten-77.vercel.app/" },
            { id: '5', title: "Men's clothes collection", description: 'An e-commerce website displaying a men&apos;s clothing collection, developed using Next.js with a focus oncreating a user-friendly shopping experience.', image: "/image/men.png", gitlink: "https://github.com/javeria-fatima49/Men-clothes-collection.git", vercel: "https://men-clothes-collection.vercel.app/" },
            { id: '6', title: 'Portfolio', description: 'A personal portfolio built with HTML/CSS showcasing my web development skills, including responsive design and modern user interfaces.', image: "/image/portfolio.png", gitlink: "https://github.com/javeria-fatima49/javeria-projects-portfolio.git", vercel: "https://javeria-projects-portfolio.vercel.app/" },
           ].map((project, index) => (
             <motion.div
               key={index}
               data-aos="fade-up"
               data-aos-delay={index * 100}  
               data-aos-once="false"
               className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-2xl shadow-lg hover:shadow-teal-500 transition-transform hover:scale-105`}
               whileHover={{ scale: 1.1 }}
              >
               <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
               <h3 className="text-xl font-bold text-teal-400">{project.title}</h3>
               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>{project.description}</p>
               <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="hover:bg-teal-600 bg-teal-500 hover:text-white transition-colors">
                    <Link href={project.vercel} target="_blank">View Project</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.gitlink} target="_blank" className={`${isDarkMode ? 'border-gray-900' :' border-gray-800'}  hover:bg-teal-700 bg-teal-500 hover:text-white transition-colors flex items-center`}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
             </motion.div>
           ))}
         </div>
       </section>
       <section id="contact" className="py-20 h-11/12 ">
        <div className="h-full px-6">
        <motion.h2
           className="text-3xl font-semibold text-teal-500 mb-6"
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
          <h2 className={`text-5xl font-bold mb-12 { ${isDarkMode ? 'text-white' : 'text-black'} text-center`}>
        <span className="text-teal-500"> Contact </span>Me
        </h2>   
         </motion.h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto  ">
            <div className="space-y-6">
              <Card className={`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-teal-500" />
                    <div>
                      <CardTitle className="text-gray-400">Email</CardTitle>
                      <CardDescription>fatimajaveria409@gmail.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className= {`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-teal-500" />
                    <div>
                      <CardTitle className="text-gray-400">Phone</CardTitle>
                      <CardDescription>03328999505</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className={`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-teal-500" />
                    <div>
                      <CardTitle className="text-gray-400">Location</CardTitle>
                      <CardDescription>Karachi, Pakistan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'} w-full p-3 rounded-lg focus:border-teal-500 focus:outline-none`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'} w-full p-3 rounded-lg focus:border-teal-500 focus:outline-none`}
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className={`${isDarkMode ? 'bg-gray-800  border-gray-800' : 'bg-gray-200  border-gray-200'} w-full p-3 rounded-lg focus:border-teal-500 focus:outline-none`}
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}