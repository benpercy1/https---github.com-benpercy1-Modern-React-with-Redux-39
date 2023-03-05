import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                desc="It's siri!"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                desc="it's Alexa!"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@Cortana22"
                image={CortanaImage}
                desc="it's cortana!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
