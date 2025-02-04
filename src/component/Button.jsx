import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text,url}) => {
  const navigate=useNavigate()
  return (
    <div>
<button class="button" onClick={()=>navigate(`${url}`)}> {text}
</button>

    </div>
  )
}

export default Button