export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client-focused. Clear communication. Collaborative development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about tech & dev.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Dev Community",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Prepwise - AI-Powered Mock Interview Platform",
    des: "From Mock to Mastery – AI That Prepares You to Win.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://prepwise-w6ml.vercel.app/",
  },
  {
    id: 2,
    title: "Fenix - Video Conferencing App",
    des: "Simplify your video conferencing experience with Fenix. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://fenix-ecru.vercel.app/",
  },
  {
    id: 3,
    title: "CarePulse - Your Healthcare Revolution",
    des: "CarePulse is a scalable healthcare management platform built for modern clinics and hospitals.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg"],
    link: "https://carepulse-brown-omega.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-nine-delta.vercel.app/",
  },
  {
    id: 5,
    title: "PopcornPlay - a modern web platform for movie lovers",
    des: "A sleek and modern movie search app powered by TMDB API. Explore trending titles, discover new favorites, and dive into detailed movie info — all in one place.",
    img: "/p5.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://popcornplay-gamma.vercel.app/",
  },
];

// testimonials.ts
export const testimonials = [
  {
    quote:
      "Tushar combines technical expertise and creativity in UI/UX and web development. His commitment to excellence, innovative approach, and ability to collaborate make him a standout in the tech industry.",
    name: "Dr.Sajal Saha",
    title: "HOD of CSE Department at Adamas University",
  },
  // You may want to add more unique entries in the future
];

// companies.ts
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// workExperience.ts
export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI/UX Intern",
    desc: "Designed and implemented user interfaces for a web application using Figma, contributing to both the visual and interactive aspects of the product.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Developed a responsive website for a local business, enhancing their online presence.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Backend Developer",
    desc: "Led a team in creating a RESTful API using Node.js and Express, improving data retrieval speed.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// socialMedia.ts
type SocialMediaItem = {
  id: number;
  img: string;
  link: string;
};

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Tusharxhub",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/tushardevx01/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tushar-kanti-dey-86185b28b/",
  },
];
