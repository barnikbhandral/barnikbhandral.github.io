
import './style.scss'

const About = () => {
    return (
      <>
        <div className="heading">
          <h1>I'm Barnik</h1>
        </div>
        <div className="about">
          <div className="aboutPhoto">
            <div ></div>
          </div>
          <div className="aboutInfo">
            <div className="aboutInfoHeading">
              <h1>
                I'm a Product Designer working remotely from 3°C Dublin, Ireland.
              </h1>
            </div>
            <div className="aboutInfoDesc">
              <p>
                Over the past 12+ years, I've worked in various areas of digital
                design, including front-end development, email, marketing, and app
                UI/UX. I'm proud to have worn many hats. These days, I focus on
                leading design at GiveDirectly, a nonprofit that lets donors send
                money directly to the world's poorest households.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;