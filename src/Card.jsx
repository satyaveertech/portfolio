import Skills from "./Skills";

const Card = ({ title, description, image, skills }) => {
  return (
    <div className="card text-start custom-card bg-transparent shadow-sm h-150 scale-hover transition border-1 border-light text-white">
      {/* <img src={image} className="card-img-top" alt={title} /> */}
      <div className="card-body">
        <h5 className="card-title"><b>Title:</b> {title}</h5>
        <p className="card-text"><b>Description:</b> {description}</p>
        <p className="card-text"><b>Skills:</b> {skills}</p>

      </div>
    </div>
  );
};
export default Card;
