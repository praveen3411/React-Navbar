export default function Skilling(props) {
    return (
      <h3>
        <img src={props.img} width="20px" height="20px" alt="skills" />
        <a>{props.sk}</a>
      </h3>
    );
  }
  