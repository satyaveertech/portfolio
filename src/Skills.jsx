
import pencilImg from "./assets/pencil.png"; // Import image from src
import mysqlImg from "./assets/mysql.png"; // Import image from src
import elasticsearchImg from "./assets/elasticsearch.png"; // Import image from src
import kibanamg from "./assets/kibana.png"; // Import image from src

const skills = [
    { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }, 
    { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },  
    { name: "React.js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },  
    { name: "Angular", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },  
    { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },  
    { name: "GitLab", image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
    { name: "MongoDB", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "MySQL", image: mysqlImg },
    { name: "Elasticsearch", image: elasticsearchImg },
    { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "Bootstrap", image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "Kibana", image:kibanamg } // Added Kibana
  
  ];
  
    
  const Skills = () => {
    return (
      <div className="container text-center   my-5">
        <h2 className="mb-4 text-white">My Skills Set</h2>
        <div className="row justify-content-center ">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4 scale-hover transition">
              <div className="card bg-dark text-white border-white p-3 shadow card-move">
                <img src={skill.image} alt={skill.name} className="card-img-top mx-auto d-block" style={{ width: "60px", height: "60px" }} />
                <div className="card-body p-2">
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  