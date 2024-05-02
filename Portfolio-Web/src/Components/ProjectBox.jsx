import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LevelsDesc:
      "it will show the project name and the resective description of your posting project . u can also show the guthub link over the projectbox and u can also insist the hosting page",
    LevelsGithub: "https://github.com/prabhaCodz",
    LevelsWebsite: "https://",

    MovieDesc:
      "it will show the project name and the resective description of your posting project . u can also show the guthub link over the projectbox and u can also insist the hosting page",
    MovieGithub: "https://github.com/prabhacodz",
    MovieWebsite: "http",

    ColourPaletteDesc:
      "it will show the project name and the resective description of your posting project . u can also show the guthub link over the projectbox and u can also insist the hosting page",
    ColourPaletteGithub: "https://github.com/prabhacodz",
    ColourPaletteWebsite: "https://colopp",

    BackpackDesc:
      "it will show the project name and the resective description of your posting project . u can also show the guthub link over the projectbox and u can also insist the hosting page",
    BackpackGithub: "https://github.com/prabhacodz",
    BackpackWebsite: "https://landing-page-/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
