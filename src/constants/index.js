import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


export const HERO_CONTENT = `Hi I am Pritom Saha,
 Passionate Software Engineer 

I have a strong interest in working with cutting-edge technologies such as React.js

As a dedicated MERN Developer, I specialize in building robust and dynamic web applications using MongoDB, Express.js, React, and Node.js. With a focus on performance, scalability, and user experience, I thrive on turning complex challenges into elegant solutions. Always eager to learn and grow, I’m excited to connect with professionals and explore new opportunities in web development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    
    year: "2024 - Present",
    role: "MERN Developer Trainee",
    company: "infowebment solution and consultancy services.",
    description: `As a MERN Developer at Infowebment Solution and Consultancy Services, I gained hands-on experience by developing various APIs and features. My work included implementing user registration and login systems, integrating password encryption for enhanced security, ensuring website responsiveness across devices, and setting up robust user authentication processes. This role allowed me to deepen my understanding of full-stack development and refine my skills in building secure and scalable web applications`,
    technologies: ["Javascript", "React.js", "Express.js", "Node.js", "mongoDB","Tailwind CSS"],
  }
];

export const PROJECTS = [
  { name: "8-Bit Technologies",
    title: "Website Design and Development for Software Company",
    image: project1,
    description:
      " Designed and developed a fully responsive tech company website with essential sections including About Us, Careers, Contact Page, Services, and Free Consultancy, ensuring a comprehensive online presence. Implemented engaging animations and visual enhancements to improve user experience and interaction, utilizing modern web technologies to deliver a visually appealing and dynamic website.",
    technologies: ["React.js", "JSX", "Tailwind CSS"],
    github:"https://github.com/Pritomsaha27/8-Bit-Technologies",
    link:"https://eightbittech.netlify.app/"
  },
  {
    name : "PixelPerfect",
    status:"[ Ongoing ]",
    title: "Copyright-Free Stock Photos Website",
    image: project2,
    description:
      "Developed a responsive photo repository website allowing users to browse, search, and download copyright-free images.Implemented user authentication and private album features, enabling users to create accounts, save favorite photos, and manage personal collections securely. Designed and optimized the site for full responsiveness, ensuring a seamless browsing and downloading  experience across various devices and screen sizes",
    technologies: ["React.js", "Node.js", "Firebase", "Express.js"],
    github:"https://github.com/Pritomsaha27/PixelPerfect",
    
  }
];

export const CONTACT = {
  address: "West Bengal, India ",
  phoneNo: "+91 6294949768 ",
  email: "pritom2001.saha@com",
};
