import { service } from "../datas/ServiceData";
import "../styles/cards.css"
const CardsSec = () => {
  return (
    <div className="container p-2 card-wrapper">
      {service.map((con) => (
        <div key={con.id} className="cardItem">
          
           
                       <button type="button" className="btn btn-go">
                    {" "}
                      <h5 className="card-title">{con.title}</h5>
                      <br></br>
                     
                    <p className="card-text">{con.desc}</p>
                 
                </button>{" "}
          
           
          
        </div>
      ))}
    </div>
  );
}

export default CardsSec