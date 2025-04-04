import React, {useState} from "react";
import "./App.css"
import { useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import myImage from "./assets/sat.png"; // Import image from src
import "./TypingAnimation.css";
import homeImg from "./assets/home.png"; // Import image from src
import emailImg from "./assets/email.png"; // Import image from src
import aboutImg from "./assets/about.png"; // Import image from src
import projectImg from "./assets/project.png"; // Import image from src
import expImg from "./assets/experience.png"; // Import image from src
import pencilImg from "./assets/pencil.png"; // Import image from src
import downloadImg from "./assets/download.png"; // Import image from src
import homepageImg from "./assets/homepage.png"; // Import image from src
import Card from "./Card";
import ContactForm from "./ContactForm";
import Skills from "./Skills";

function App() {
  const [bgColor, setBgColor] = useState("transparent");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

     setWidth(window.innerWidth);

     if(width <=400){
      setBgColor("#041A40"); // Darker when scrolling down
    }


    setBgColor("#041A40");
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 100) {
        // Scrolling Down
        setShowParticles(true); // Hide particles when at the top

        if(width <=400){
          setBgColor("#041A40"); // Darker when scrolling down
        }

        setBgColor("#041A40"); // Darker when scrolling down
      } else {
        // Scrolling Up
        setShowParticles(false); // Hide particles when at the top
        setBgColor("#041A40");
        setBgColor(""); // Lighter when scrolling up
        if(width <=400){
          setBgColor("#041A40"); // Darker when scrolling down
        }

      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos,width]);

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
  

  return (
    <>    

    <div className="container-flex">
      <div className="row " style={{ backgroundColor: bgColor}}>
        <div className="col-12 col-sm-12 col-md-3  text-md-center text-sm-center text-white">
         <div className="container-flex row ">
          <div className="col-12 col-sm-12 col-md-3  text-md-center text-sm-center text-center text-white">
          <img src={myImage} alt="Rounded" style={{ width: "70px", height: "70px",  borderRadius: "50%" }}/>
          </div>
          <div className="col-12 col-sm-12 col-md-9 text-md-center text-sm-center  text-center text-white">
          <b><h3>  <i> I, am Satyaveer Singh </i></h3></b>
           Mob- +91-7017032938
          </div>
         </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6  text-md-center text-white">
        <div className="container">
        <div className="col-12 text-md-center text-sm-center text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <motion.h1
          initial={{ opacity: 0, scale: .5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}
        >
          Hello, Welcome on my Portfolio!
        </motion.h1>
    </div>
    <div className="col-12 text-md-center text-sm-center text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>

     
    <nav class="navbar navbar-expand-lg navbar-dark ">
        
            <ul class="navbar-nav">
                <li class="nav-item">
                <a href="#home" className="p-1"><img src={homeImg} alt="Rounded" style={{ width: "20px", height: "20px", mmarginBottom: "6px"}}/>Home</a>
                </li>
                <li class="nav-item">
                <a href="#about" className="p-1"><img src={aboutImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>About Me</a>
                </li>
                <li class="nav-item">
                <a href="#contact" className="p-1"><img src={pencilImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Skills</a>
                </li>
                <li class="nav-item">
                <a href="#projects" className="p-1"><img src={projectImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Projects</a>
                </li>
                <li class="nav-item">
                <a href="#contact" className="p-1"><img src={emailImg} alt="Rounded" style={{ width: "20px", height: "20px", marginBottom: "6px"}}/>Contact</a>
                </li>
            </ul>
      </nav>
    
    </div>
    </div>
    </div>

        <div className="col-12 col-sm-12 col-md-3 text-md-center text-sm-center text-center text-white">
              <div className="typing-container">
            <span className="typing-text">I'm a Full-stack Developer</span>
            </div>
            <div>
            Email- satyaveer.tech51@gmail.com
            </div>
          </div>
      </div>
    </div>

          <div className="row col-12 col-sm-12 text-md-center text-sm-center text-center text-white mt-4">

            
         {/* <section id="home"  class="section container-fluid d-flex align-items-center  justify-content-center bg-transparent text-white "> */}
          <div className="text-md-center text-sm-center text-center">
           <img src={homepageImg} alt="Rounded" style={{ width: "500px", height: "400px", marginBottom: "6px"}}/>
            </div>
            <div className="text-md-center">
            <h1>Hi, I'm Satyaveer Singh <span className="wave">👋</span></h1>
            <h2>Senior Software Developer | Full-Stack Software Developer</h2>
            <p>
              Passionate about building scalable applications, optimizing performance, and driving innovation.
            </p>
      
            <div style={{marginTop:"100px"}}>
            <a href="#contact" > <img src={downloadImg} alt="Rounded" style={{ width: "50px", height: "50px", marginBottom: "6px"}}/>Resume</a>
            </div>
      
             </div>
            </div>
            {/* </section>  */}
            {/* </div> */}


            <div className="row col-12 col-sm-12 text-md-center text-sm-center text-center text-white">
                Hello
            </div>
        
       {/* <div>  */}
            {/* <div className="row col-12 col-sm-12 text-md-center text-sm-center text-center text-white"> */}
            {/* <section id="about"  class=" section container-fluid d-flex align-items-center justify-content-center min-vh-100  transparent-box " > */}
                {/* <div className="container text-md-center">
                <h2 >About Me</h2>
                <p className="text-md-center">
                  I'm a highly skilled Senior Software Developer with 11+ years of experience in designing, developing, and deploying high-performance applications.
                  My expertise spans across full-stack development, cloud computing, and DevOps automation. 
                </p>
                <p className="text-md-center">
                  I specialize in technologies like Python (FastAPI, Flask, Django), JavaScript (React, Node.js), AWS, CI/CD pipelines Databases(Mysql, MongoDb, Redis, ElasticSearch, Dynamodb, Sqlite etc.).
                </p>
                <p className="text-md-center">
                  I love solving complex development challenges, optimizing performance, and mentoring developers to build efficient software solutions.
                 </p> 
                 </div> */}
            {/* </section> */}

            {/* </div> */}

            {/* <section id="skills"  class=" container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-transparent text-white">
            
            <Skills />
      
            </section> */}
            {/* 
            <section id="projects" class="container-fluid d-flex  align-items-center justify-content-center min-vh-50 bg-dark text-white">
              <div className="container my-5">
              <h1 className="text-center mb-4">Project Details </h1>
              <div className="row g-4">
                {cardData.map((card, index) => (
                  <div key={index} className="col-sm-12 col-md-6 col-lg-6">
                    <Card {...card} />
                  </div>
                ))}
              </div>
            </div>
            </section>
            <section id="contact" className="section ">
      
            <ContactForm />
            </section> */}
          </>


     );
}

export default App;
