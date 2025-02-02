import React, { useState, useEffect } from "react"; // Added useEffect import
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// ToggleButton Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm"
  >
    {isShowingMore ? "See Less" : "See More"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isShowingMore ? "rotate-180" : ""}`}
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
);

// TabPanel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Static Projects Data
const Projects = [
  {
    id: 1,
    Img: "/project1/1.png",
    Title: "Book Store",
    Description: "Platform designed to provide users with a seamless shopping experience.",
    ProjectLink: "https://ahmaadmostafa.github.io/Book-s-Store/main.html",
    GitHubLink: "https://github.com/AhmaadMostafa/Book-s-Store",
    TechStack: ["HTML", "CSS", "JavaScript"],
  },
  {id: 2,
    Img: "/project1/2.png",
    Title: "Movies Platform",
    Description: "The platform allows users to browse and view movies through a simple interface.",
    ProjectLink: "https://ahmaadmostafa.github.io/Movies/",
    GitHubLink: "https://github.com/AhmaadMostafa/Movies",
    TechStack: ["HTML", "CSS", "JavaScript" , "React js"]
  },
  {id: 3,
    Img: "/project1/4.png",
    Title: "Smart Finish",
    Description: "A platform connecting users with skilled professionals for apartment finishing services.",
    ProjectLink: "",
    GitHubLink: "#",
    TechStack: ["HTML" , "CSS" , "React js"]
  },
  // Add more projects as needed
];

// Static Certificates Data
const staticCertificates = [
  {
    Img: "/Certificates/1.png", 
  },
  {
    Img: "/Certificates/3.png",
  },
  {
    Img: "Certificates/4.png",
  },
  {
    Img: "Certificates/5.png",
  },
  // Add more certificates as needed
];

// Tech Stacks Data
const techStacks = [
  { icon: "c++.svg", language: "C++" },
  { icon: "csharp.svg", language: "CSharp" },
  { icon: "dotnet.svg", language: ".Net Core" },
  { icon: "sql.svg", language: "SQL" },
  { icon: "sqlserver.svg", language: "Sql Server" },
  { icon: "swagger.svg", language: "Swagger" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  // Handle Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Toggle Show More/Less
  const toggleShowMore = (type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  };

  // Displayed Items
  const displayedProjects = showAllProjects ? Projects : Projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? staticCertificates : staticCertificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header Section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio
        </h2>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Skills" />
          </Tabs>
        </AppBar>

        {/* Swipeable Views */}
        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div key={project.id} data-aos="fade-up" data-aos-duration="1000">
                    <CardProject {...project} />
                  </div>
                ))}
              </div>
            </div>
            {Projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          {/* Certificates Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {staticCertificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          {/* Skills Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}