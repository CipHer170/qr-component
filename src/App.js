import BaseContainer from "./Components/BaseContainer/BaseContainer";
import image from "./images/image-qr-code.png";
import "./App.scss";
function App() {
  return (
    <BaseContainer>
      <div className="qr">
        <img src={image} alt="qr-code" className="qr__code" />
        <div className="qr__info">
          <h3>Improve your front-end skills by building projects</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </BaseContainer>
  );
}

export default App;
