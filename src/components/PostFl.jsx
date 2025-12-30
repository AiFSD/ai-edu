import React, { useState } from 'react'

const PostFl = () => {
     const [name , setName ] = useState("")
  return (
    <div>
<div className="input-group mb-3">
  <button onClick={() => {setName}} className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" className="form-control " placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
<h1>{name}</h1>
    </div>
  )
}

export default PostFl