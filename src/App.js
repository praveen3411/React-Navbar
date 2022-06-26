import React from "react";
import Names from "./components/Name.js";
import Titlee from "./components/title.js";
import Skilling from "./components/Skills.js";
import "./styles.css";
export default function Avathar(props) {
  const { Uname, imgaeurl, Title, skills } = props;
  const [setting, setsettting] = React.useState(0);
  let clickme = () => {
    setsettting(setting + 1);
    alert(`${Uname} got one follower`);
  };
  return (
    <div>
      <div id="one">
        <Names uname={Uname} />
        <button id="three" onClick={clickme}>
          Follow
        </button>
        <h3 id="four">Foll:{setting}</h3>
        <img src={imgaeurl} width="100px" height="100px" alt="girls" id="two" />
      </div>
      <div id="five">
        <Titlee title={Title} />
        {skills.map((elem) => (
          <Skilling img={elem.icon} sk={elem.description} />
        ))}
      </div>
    </div>
  );
}
