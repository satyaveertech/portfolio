import React, {useState, useRef} from "react";
import "./App.css"
import { useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import myImage from "./assets/avatar.jpg"; // Import image from src
import "./TypingAnimation.css";
import homeImg from "./assets/home.png"; // Import image from src
import emailImg from "./assets/email.png"; // Import image from src
import aboutImg from "./assets/about.png"; // Import image from src
import projectImg from "./assets/project.png"; // Import image from src
import expImg from "./assets/experience.png"; // Import image from src
import pencilImg from "./assets/pencil.png"; // Import image from src
import downloadImg from "./assets/download.png"; // Import image from src
import homepageImg from "./assets/homepage.png"; // Import image from src
import mobileImg from "./assets/mobile.png"; // Import image from src

import Card from "./Card";
import ContactForm from "./ContactForm";
import Skills from "./Skills";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Button } from "bootstrap";


function App() {
  const [bgColor, setBgColor] = useState("transparent");
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);



  // const divRef = useRef(null);
  // // setCurrentScrollPos(window.scrollY);

  // useEffect(() => {
  //   if (headerRef.current) {
  //     setHeaderHeight(headerRef.current.offsetHeight);
  //   }
  //   const handleResize = () => {
  //     if (headerRef.current) {
  //       setHeaderHeight(headerRef.current.offsetHeight);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [headerHeight]);


  useEffect(()=>{
 
    setBgColor("#041A40");
    const handleScroll = () => {

      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 10) {
        setBgColor("#041A40"); // Darker when scrolling down
      } else {
        setBgColor(""); // Lighter when scrolling up
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  
  },[currentScrollPos])

  const cardData = [
    { title: "Legacy Email & Review 2", description:"LEAR (Legacy Email And Review)- Provide an efficient and user-friendly interface to search and retrieve legacy emails and reviews. Integrate with existing systems that may have outdated data storage and retrieval mechanisms. Improve access to historical communications and feedback, which could be valuable for customer service, legal compliance, or business insights.", skills:"Python(Fast-Api), React, VS Code, C#,  Sqlite, MongoDb,Elasticsearch, Kibana." },
    { title: "Cloud Connect",  description:"ColdConnect is a powerful and automated cold outreach tool designed to help businesses and individuals connect with potential clients, partners, or leads via personalized cold emails. It streamlines the email outreach process, increasing engagement and conversion rates while reducing manual effort.", skills:"Python(Fast-Api), React, VS Code, AWS-EC2, Ngnx." },
    { title: "Invenire",  description:"Invinire - Improve the efficiency of searching, indexing, and managing vast inventories or data sets. Provide a centralized platform for users to search and retrieve information easily using various filters and search criteria. Ensure that all items or records in the inventory are well-organized, categorized, and accessible.", skills:"Python(Flask, Django) , React , aws Lambda, aws S3, Aws Dynamodb, AWS cloudSearch." },
    { title: "Portfolio",  description:"schoolmax - Digitize administrative processes. Enhance collaboration among stakeholders (students, teachers, and parents). Provide a centralized platform for managing academics, attendance, fees, and communication. Reduce manual workload and errors in school administration.", skills:"React, vite, Bootstarp, css etc" },
    { title: "Legacy Email & Review 1", description:"LEAR (Legacy Email And Review)-Provide an efficient and user-friendly interface to search and retrieve legacy emails and reviews. Integrate with existing systems that may have outdated data storage and retrieval mechanisms. Improve access to historical communications and feedback, which could be valuable for customer service, legal compliance, or business insights.", skills:"Python, Flask, Nodejs, ExpressJs, C#, Angular, Sqlite, MongoDb, Elasticsearch." },
    { title: "Opspi",  description:"Opspi - Automate server provisioning, configuration, and management. Streamline client and account management. Improve efficiency in handling support requests and billing cycles.Monitor server performance and ensure uptime.", skills:"Nodejs, Angular, Sqlite, MongoDb, PostgreSql, SQL server, Mysql, Sql etc."},
    { title: "Hr2Payroll",  description:"Hr2Payroll - Automate server provisioning, configuration, and management. Streamline client and account management. Improve efficiency in handling support requests and billing cycles.Monitor server performance and ensure uptime.", skills:"Cakephp, html, javascript, bootstrap, css, jquery, Mysql etc." },
    { title: "mlm(Multi-level Marketing)",  description:"mlm(Multi-level Marketing) - Simplify the management of MLM networks. Automate commission calculations based on sales and referrals. Provide real-time insights into the growth and performance of the network. Enhance member engagement through dashboards, reports, and payment tracking.", skills:"Core php, html, javascript, ajax, bootstrap, css, jquery, Mysql etc." },
    { title: "schoolmax",  description:"schoolmax - Digitize administrative processes. Enhance collaboration among stakeholders (students, teachers, and parents). Provide a centralized platform for managing academics, attendance, fees, and communication. Reduce manual workload and errors in school administration.", skills:"Core php, html, javascript, ajax, bootstrap, css, jquery, Mysql etc." },
  ];


  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const scrollToSection = (id) => {
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight, // Adjust to start after header
        behavior: "smooth",
      });
    }
  };



  return (
    <>   
<div class="container-flex header max-vh-100 fixed-top " style={{  backgroundColor: bgColor}} ref={headerRef}>
<div class="row gx-0" >
            <div class="col-md-3  text-white p-3">
                <div class="row gx-0">
                  <div class="col-3 text-md-center text-sm-center text-dark p-1">
                    {/* <img src={myImage} alt="Rounded" style={{ width: "70px", height: "70px",  borderRadius: "50%" }}/> */}
                   </div>
                    <div class="col-9  text-white p-1">
                      <b><h3>  <i>Satyaveer Singh </i></h3></b>
                          {/* Mob- +91-7017032938 */}
                  </div>
                </div>
            </div>
            <div className="col-md-6 text-center text-md-center text-sm-center p-1 d-flex flex-column align-items-center justify-content-center">
      {/* Heading Animation */}
      <div className="col-md-12 text-center p-1">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}
        >
          {/* Hello, Welcome to my Portfolio! */}
        </motion.h1>
      </div>

      {/* Navigation Menu */}
      <div className="col-md-12 text-md-center text-sm-center text-center">
      <nav>
      <button  className="text-white px-2 button" onClick={() => scrollToSection("home")}><img src={homeImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Home </button>
      <button  className="text-white px-2 button" onClick={() => scrollToSection("about")}><img src={aboutImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>About Me </button>
      <button  className="text-white px-2 button" onClick={() => scrollToSection("skills")}><img src={pencilImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Skills </button>
      <button  className="text-white px-2 button" onClick={() => scrollToSection("projects")}><img src={projectImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Projects </button>
      <button className="text-white px-2 button" onClick={() => scrollToSection("contact")}><img src={emailImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Contact </button>

    </nav>      </div>
    </div>
            <div class="col-md-3  text-white p-1">
                    <div class="col-12  text-white text-md-center text-sm-center text-center p-1"> 
                      <div className="typing-container">
                    {/* <span className="typing-text">I'm a Full-stack Developer</span> */}
            </div></div>
            <div class="col-12  text-white text-md-center text-sm-center text-center p-1">
              {/* Email- satyaveer.tech51@gmail.com */}
            </div>
            </div>
        </div>
</div>

    <section id="home" className="section bg-tranparent  vh-auto d-flex align-items-center position-relative  justify-content-center"  style={{ marginTop: `${headerHeight}px`}}>
        <div class="container-flex text-center">
                <div class="col-12  text-center ">
                <img src={homepageImg} alt="Rounded" className="custom-img"/>
                </div>
                <div class="col-12  text-white text-center hover-text mb-5  ">
                <h1>Hi, I'm Satyaveer Singh <span className="wave"><motion.span
                    animate={{ rotate: [0, 20, 0, -20, 0] }} // Rotates back and forth
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} // Loops infinitely
                    style={{ display: "inline-block" }} // Ensures proper animation
                  >
                    👋
    </motion.span></span></h1>
                <h2>Senior Software Developer | Full-Stack Software Developer</h2>
                <p class="mb-5">
                  Passionate about building scalable applications, optimizing performance, and driving innovation.
                </p>
                 <span styel={{marginTop:"60px"}}><a href="/Resume.docx" className="text-decoration-none" > <img src={downloadImg} alt="Rounded" style={{ width: "50px", height: "50px"}}/><br/>Resume</a></span>            
                </div>
        </div>
      </section> 

      <section id="about" class="section text-white bg-dark min-vh-50 d-flex align-items-center justify-content-center py-5"  >
        <div class="container-flex">
                <div class="col-12 text-white text-center hover-text">
                <h2 >About Me</h2>
                <p>
                  I'm a highly skilled Senior Software Developer with 11+ years of experience in designing, developing, and deploying 
                  high-performance applications.<br/> My expertise spans across full-stack development, cloud computing, and DevOps automation. 
                </p>
                <p >
                  I specialize in technologies like Python (FastAPI, Flask, Django), JavaScript (React, Node.js), AWS, CI/CD pipelines Databases(Mysql, MongoDb, Redis, ElasticSearch, Dynamodb, Sqlite etc.).
                </p>
                <p >
                  I love solving complex development challenges, optimizing performance, and mentoring developers to build efficient software solutions.
              </p>          
                </div>
              
        </div>
    </section>

    <section  id="skills" class="section text-white d-flex min-vh-100 align-items-center justify-content-center py-5" >
        <div class="container-flex">
                <div class="col-12 text-center">
                <Skills/>
                </div>
        </div>
    </section>

    <section id="projects" class="section bg-dark h-auto text-white main" >
        <div class="container-flex pt-1">
              <div class="col-12 text-center">
              <div className="container my-5 ">
              <h1 className="text-center ">Projects Detail </h1>
              <div className="row g-4 pb-5 ">
                {cardData.map((card, index) => (
                  <div key={index} className="col-sm-12 col-md-6 col-lg-6" >
                    <Card {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="contact" class="section text-white d-flex  align-items-center justify-content-center mb-5 mb-5 vh-80 " >
        <div class="container-flex">
              <div class="col-12 text-center">

              <h3>Satyaveer Singh</h3>
              <h3><img src={emailImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/> satyveer.tech51@gmail.com</h3>
              <h3><img src={mobileImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/> +91- 7017032938</h3>
              {/* <ContactForm /> */}

              </div>
              
        </div>
    </section>

    <section class="section bg-dark ">
        <div class="container-flex">
              <div class="col-12 text-center">
              <footer class="bg-dark text-light text-center py-3">
            <p class="mb-0">&copy; 2025 MyWebsite. All Rights Reserved.</p>
           </footer>
              </div>
        </div>
    </section>


        {/* <div class="container-flex">
        <div class="row gx-0" >
            <div class="col-md-3 bg-primary text-white p-3">
                <div class="row">
                    <div class="col-3 bg-light text-dark p-2">50% Width</div>
                    <div class="col-9 bg-dark text-white p-2">50% Width</div>
                </div>
                <div class="row mt-2">
                    <div class="col-12 bg-warning text-dark p-2">
                    <a href="#test" className="p-1"><img src={homeImg} alt="Rounded" style={{ width: "20px", height: "20px", mmarginBottom: "6px"}}/>Home</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 bg-secondary text-white p-3">Column 2</div>
            <div class="col-md-3 bg-success text-white p-3">Column 3</div>
        </div>




        </div>
 */}


     
        {/* <div className="container"> */}
        {/* <section className=" section mt-2  d-flex align-items-center  justify-content-center bg-transparent text-white">
        <div class="col-12 box text-center text-white p-2 ">
            <img src={homepageImg} alt="Rounded" className="responsive-img1"/>
            <h1>Hi, I'm Satyaveer Singh <span className="wave">👋</span></h1>
            <h2>Senior Software Developer | Full-Stack Software Developer</h2>
            <p>
              Passionate about building scalable applications, optimizing performance, and driving innovation.
            </p>
            <a href="#contact" > <img src={downloadImg} alt="Rounded" style={{ width: "50px", height: "50px", marginBottom: "6px"}}/>Resume</a>
        </div>
       </section> */}
       {/* </div> */}

{/* 
        <section className=" section mt-2  d-flex align-items-center  justify-content-center bg-transparent text-white">
             <div id="#test" box class="col-12  text-center text-white p-2">
              <h2 >About Me</h2>
                <p>
                  I'm a highly skilled Senior Software Developer with 11+ years of experience in designing, developing, and deploying high-performance applications.
                  My expertise spans across full-stack development, cloud computing, and DevOps automation. 
                </p>
                <p >
                  I specialize in technologies like Python (FastAPI, Flask, Django), JavaScript (React, Node.js), AWS, CI/CD pipelines Databases(Mysql, MongoDb, Redis, ElasticSearch, Dynamodb, Sqlite etc.).
                </p>
                <p >
                  I love solving complex development challenges, optimizing performance, and mentoring developers to build efficient software solutions.
              </p>          
          </div>
        </section> */}
        

        {/* <div id="#test" class="col-12  text-center border-top border-white text-white p-2" style={{ height: "800px", marginBottom: "6px"}}>
        </div> */}
{/* 
<div className="container">


        <section className="col-12  mt-2 section  d-flex align-items-center  justify-content-center bg-transparent text-white">
        <div class="col-12 bg-light text-dark p-2">50% Width</div>
        </section>
</div> */}

        {/* <section className="section mt-2 section  d-flex align-items-center  justify-content-center bg-transparent text-white">
        <div class="col-12 bg-light text-dark p-2">50% Width</div>
        </section>

        <section className="section mt-2 section  d-flex align-items-center  justify-content-center bg-transparent text-white">
        <div class="col-12 bg-light text-dark p-2">50% Width</div>
        </section>

        <section className="section mt-2 section  d-flex align-items-center  justify-content-center bg-transparent text-white">
        <div class="col-12 bg-light text-dark p-2">50% Width</div>
        </section> */}

    </>

     );
}

export default App;
