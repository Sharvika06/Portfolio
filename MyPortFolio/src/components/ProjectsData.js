import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript  } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiNodedotjs } from "react-icons/si";
import crypto from "../assets/Images/crypto.png";
import prompt from "../assets/Images/prompt.png";
import sns from "../assets/Images/sns.png";
import parkhub from "../assets/Images/parkhub.png";
import { FaFigma } from "react-icons/fa";

const ProjectsData = [
  {
    id: "1",
    name: "CryptoInsight Website",
    image: crypto,
    icons: [BiLogoReact, BiLogoCss3],
    description: "This website is created for crypto enthusiasts to track their favorite cryptocurrencies.",
    github: "https://github.com/Sharvika06/Crypto_Search",
    demo: "https://crypto-search-sharvika06s-projects.vercel.app ",
  },
  {
    id: "2",
    name: "Prompt AI Website",
    image: prompt,
    icons: [FaFigma],
    description: "This is a parking app made using figma.",
    github: "https://github.com/Sharvika06/Nextjs_AI/tree/main/prompt_AI",
    demo: "https://nextjs-ai-lyart.vercel.app ",
  },
  {
    id: "3",
    name: "web Application",
    image: sns,
    icons: [SiExpress,BiLogoMongodb,TbApi,SiNodedotjs],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/Sharvika06/webapp"
  },
  {
    id: "4",
    name: "Park Hub",
    image: parkhub,
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/Sharvika06/UI-UX_Projects"
  },
  // {
  //   id: "5",
  //   name: "Car Rental Website",
  //   image: "./car-rental-app.png",
  //   icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
  //   description: "This is an online platform that allows users to rent cars for personal or business use.",
  //   github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  //   demo: "https://car-rental-application.vercel.app",
  // },
  // {
  //   id: "8",
  //   name: "Blog Application",
  //   image: "./blog-app.png",
  //   icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
  //   description: "This application allows users to express their thoughts and experiences through blogs.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
  //   demo: "https://write-ur-blog.vercel.app",
  // },
];

export default ProjectsData;
