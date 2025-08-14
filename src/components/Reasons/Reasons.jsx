import "./Reasons.css";
import image2 from "../../assets/image2.png";
import tick from "../../assets/tick.png";
import { dataImage } from "../../data/reasonsData";
import logosmarca from "../../assets/logosmarca_preview_rev_1.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-reason">
        {dataImage.map((image) => (
          <img src={image.url} alt={image.name} key={image.id} />
        ))}
      </div>

      <div className="right-reason">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose use?</span>
        </div>

        <div className="details-reason">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNER
        </span>
        <div className="partners">
          <img src={logosmarca} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
