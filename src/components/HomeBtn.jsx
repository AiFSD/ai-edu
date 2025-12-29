import "../styles/homebtn.css"

const HomeBtn = () => {
  return (
    <div>

<div className="container con-reg">
  <div className="col">
<h1>Join as a client or freelancer</h1>
  </div>
  <div className="col">

<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Select Your Preference</option>
  <option value="1"> client </option>
  <option value="2"> freelancer</option>

</select>



  </div>
  <div className="col"> <button class="btn btn-primary" type="button">Button</button> </div>
  <div className="col">Already have a Account ?        
    <a href="/">logIn</a>
  </div>
</div>




 

    </div>
  )
}

export default HomeBtn