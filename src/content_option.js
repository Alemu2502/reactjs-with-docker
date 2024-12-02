const logotext = "ALEMU";
const meta = {
    title: "Alemu Molla",
    description: "I’m Alemu Molla, a Full Stack Developer",
};

const introdata = {
    title: "I’m Alemu Molla",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop web apps",
    },
    description: "A passionate Full Stack Software Developer 🚀 with experience in building web applications using JavaScript, TypeScript, React, Node.js, Express.js, and other cool libraries and frameworks.",
    your_img_url: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d'
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am an intermediate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With a robust background in web development, I create dynamic and responsive web applications that deliver seamless user experiences. My expertise spans from front-end design to back-end infrastructure, ensuring comprehensive and high-quality solutions. Driven by a passion for continuous learning and innovation, I thrive in collaborative environments and am dedicated to crafting efficient, scalable, and user-friendly applications. I bring a commitment to excellence and a keen eye for detail to every project I undertake.",
};

const skills = [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 60 },
    { name: "Tailwind CSS", value: 60 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 70 },
    { name: "mern", value: 80 },
    { name: "nextjs", value: 80 },
    { name: "NOSQL", value: 80 },
    { name: "SQL", value: 80 },
    { name: "WordPress", value: 80 },
    { name: "Jest", value: 70 },
    { name: "Cypress", value: 60 },
    { name: "Git", value: 70 },
    { name: "GitHub", value: 60 },
    { name: "Vite", value: 60 },
    { name: "Webpack", value: 60 },
];

const services = [
    {
        title: "Full Stack Development",
        description: "As an intermediate Full Stack Developer, I excel in both front-end and back-end development. I build responsive web applications using HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, MySQL, and PostgreSQL. My goal is to deliver robust and scalable web solutions that seamlessly bridge the gap between design and technology.",
    },
    {
        title: "WordPress Design",
        description: "I am an intermediate WordPress Developer with a strong background in creating dynamic and engaging websites. I specialize in custom theme and plugin development, ensuring that each website I build is tailored to meet the specific needs of my clients. With a keen eye for detail and a passion for seamless user experiences, I deliver high-quality, responsive, and SEO-friendly websites. My goal is to help businesses establish a robust online presence and achieve their digital goals.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description:"Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "Visit my MERN e-commerce website.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
    YOUR_TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
    YOUR_USER_ID: import.meta.env.VITE_USER_ID,
};

const socialProfiles = {
    github: import.meta.env.VITE_GITHUB,
    facebook: import.meta.env.VITE_FACEBOOK,
    linkedin:import.meta.env.VITE_LINKEDIN,
    twitter: import.meta.env.VITE_TWITTER,
};

export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialProfiles as socialprofils,
    logotext,
};
