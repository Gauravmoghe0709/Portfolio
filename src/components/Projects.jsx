import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  ai,
  musicplayer,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
 
  
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="GPT Clone Website"
            para="GPT Clone is a website which focuses on introduction of AI to the world "
            img={GPT4}
            link="https://chatgpt-backend-jr20.onrender.com/"
            github_link="https://github.com/Gauravmoghe0709/Chatgpt-Backend"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="nodejs" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            express={
              <Tooltip title="express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="mongodb" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
          />
          <Project_prop
            title="Moody Player"
            para="I’m a frontend developer who enjoys mixing mood, creativity, and clean coding"
            img={musicplayer}
            link=""
            github_link="https://github.com/Gauravmoghe0709/Moody-Player"
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            express={
              <Tooltip title="express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="mongodb" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
          />
          <Project_prop
            title="Ai Caption Generator"
            para="I developed an AI Caption Generator that creates fast and creative captions using AI intelligence"
            img={ai}
            link=""
            github_link="https://github.com/Gauravmoghe0709/Ai-Caption-Generator"
            nodejs={
              <Tooltip title="nodejs" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            express={
              <Tooltip title="express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="mongodb" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
