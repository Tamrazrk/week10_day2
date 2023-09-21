import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEarthAmerica,
  faBuildingColumns,
  faLocationDot,
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="text-justify">Company</h1>
        <p>We speciallise in something ...</p>
      </div>
      <div className="card barati">
        <span className="icon icon-building">
          <FontAwesomeIcon icon={faBuilding} />
        </span>
        <div className="text">
          <h1>About the Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="card">
        <span className="icon">
          <FontAwesomeIcon icon={faEarthAmerica} />
        </span>
        <div className="text">
          <h1>Our Values</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="card">
        <span className="icon">
          <FontAwesomeIcon icon={faBuildingColumns} />
        </span>
        <div className="text">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div className="contact">
        <div className="title">
          <h1>Contact us</h1>
        </div>
        <div className="content">
          <div className="text">
            <p>Contact us and we will get back to you within 24 hours</p>
            <div className="location">
              <FontAwesomeIcon className="mini-icon" icon={faLocationDot} />
              <p>Company Name</p>
            </div>
            <div className="mobile">
              <FontAwesomeIcon className="mini-icon" icon={faMobileScreenButton} />
              <p>+256 778 800 900</p>
            </div>

            <div className="email">
              <FontAwesomeIcon className="mini-icon" icon={faEnvelope} />
              <p>company.gmail.com</p>
            </div>
          </div>
          <div className="forms">
            <h5>Contact</h5>
            <input placeholder="email address"></input>
            <textarea
              type="text"
              formControlName="message"
              placeholder="comment"
            ></textarea>
            <button> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
