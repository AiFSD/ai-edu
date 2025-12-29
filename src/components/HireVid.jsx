import hireVid from "../videos/hirehere.mp4"

const HireVid = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
      <video
      width={1000}
        height={500}
        src={hireVid}
        autoPlay
     
        muted
        playsInline
      ></video>
    </div>
  );
}

export default HireVid