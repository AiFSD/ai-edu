import { howData } from "../datas/how";
import video from "../videos/cardVid.mp4";
import "../styles/how.css";
const How = () => {
  return (
    <div >
      <div className=" container-fluid text-center con-how">
        <div className="row">
          <div className="col">
            <div className="card cards-t">
              <video
                className="vid-class"
                style={{ width: "100%", height: "100%" }}
                src={video}
                autoPlay
                loop
                muted
                playsInline
                controls
              ></video>

              <div className="card-body card-b">
                <p className="card-text">Lorem ipsum dolor accusamus. </p>
                <p className="card-text">
                  Ipsam, omnis. Cupiditate aperiam ipsa expedita, vel, commodi,
                  non earum.
                </p>
              </div>
            </div>
          </div>

          {howData.map((data) => (
            <div key={data.id} className="col  threeCards">
              <div className="card cards-t">
                <div className="img-t">
                  <img
                    src={data.imagepath}
                    className="card-img-top vid-class"
                    alt="..."
                  />
                </div>

                <div className="card-body">
                  <p className="card-text">{data.descp}</p>
                  <p className="card-text">{data.sponc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default How;
