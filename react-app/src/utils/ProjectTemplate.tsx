import "../styles/App.css";
interface Props {
  thumbnail: string;
  description: string;
  landingPage: string;
}

function Project(props: Props) {
  return (
    <>
      <div className="project">
        <img src={props.thumbnail} className="projectThumbnail"></img>
        <div className="projectDescription">
          <p>
            {props.description} placeholderplaceholderplaceholderplaceholder
          </p>
          <p className="techs">Technologies used:</p>
        </div>
      </div>
    </>
  );
}

export default Project;
