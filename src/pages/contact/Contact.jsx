import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactHeading">
          <h1>Feel free to contact me </h1>
        </div>
        <div className="contactIcon">
          <div className="icon ">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/barnikbhandral/"
            >
              <LinkedInIcon sx={{ paddingTop: "18px" }} fontSize="large" />
            </a>
          </div>
          <div className="icon ">
            <a
              className="mail"
              href="https://www.linkedin.com/in/barnikbhandral/"
            >
              <MailOutlineRoundedIcon
                sx={{ paddingTop: "18px "}}
                fontSize="large"
              />
            </a>
          </div>
          <div className="icon ">
            <a className="github" href="https://github.com/barnikbhandral">
              <GitHubIcon sx={{ paddingTop: "18px" }} fontSize="large" />
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Contact;
