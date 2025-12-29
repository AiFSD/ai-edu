import hireVid from "../videos/hirehere.mp4"

const HireVid = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
      <video
        style={{ width: "30%", height: "220px"  }}
        src={hireVid}
        autoPlay
        loop
        muted
        playsInline
        controls
      ></video>
    </div>
  );
}

export default HireVid