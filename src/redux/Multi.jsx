import { useSelector , useDispatch } from "react-redux"
import { mul } from "./calcSlice"

const Multi = () => {
     const count = useSelector((state) => state.multiply.value ) 
      const dispatch = useDispatch()
  return (
    <div>
     <div className="display">
          {count}
     </div>
     <button onClick={() => (dispatch(mul()))} className="multiply" style={{height:"50px" , width:"100px"}}>
      multiply by 2
     </button>
    </div>
  )
}

export default Multi