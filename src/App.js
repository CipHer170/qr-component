import image from "./images/qr.svg";
import "./App.scss";
function App() {
  return (
    <div className="qr">
      <div className="qr__container">
        <div className="qr__code">
          <img src={image} alt="qr-code" className="code" />
        </div>
        <div className="qr__info">
          <h3>Improve your front-end skills by building projects</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
