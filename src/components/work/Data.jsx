import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Meal Planning & Delivery Application",
    category: "ecommerce",
    description:
      "Feadme is a personalized meal planning and delivery web application that connects customers with meal providers, offering customized meal options based on dietary preferences and scheduling.",
    livesite: "https://feadme-client.vercel.app/",
    github: "https://github.com/smhasanjamil/feedme",
    technology: ["TypeScript", "Next.js", "Node", "Mongoose"],
  },
  {
    id: 2,
    image: Work2,
    title: "Stationery Shop application",
    category: "ecommerce",
    description:
      "Stationery Shop is a full-featured e-commerce platform for browsing, managing, and purchasing stationery products with secure authentication, role-based dashboards, and responsive user experience.",
    livesite: "https://stationary-shop-client-fawn.vercel.app/",
    github: "https://github.com/smhasanjamil/stationary-shop",
    technology: ["TypeScript", "React", "Node", "Mongoose"],
  },
  {
    id: 3,
    image: Work3,
    title: "Nesty Travel & Tourism",
    category: "tourism",
    description:
      "Nesty is a travel booking platform that allows users to browse, book, and manage accommodations, offering a seamless experience for both travelers and property owners.",
    livesite: "https://nesty-hasanjamil.vercel.app/",
    github: "https://github.com/smhasanjamil/nesty",
    technology: ["TypeScript", "Next.js", "Node", "Mongoose"],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "ecommerce",
  },
  {
    name: "tourism",
  },
];
