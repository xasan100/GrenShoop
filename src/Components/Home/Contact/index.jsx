import React from 'react'
import { Blog } from './style'
import Logo from "../../../Assets/image/logo.png"
import Location from "../../../Assets/icons/Location.png"


export const Contact = () => {
  return (
 <Blog>
<div>
  <img src={Logo} alt="" />
</div>
<div className='location'>
<div>
<img src={Location} alt="" /> 
</div>
 <p>70 West Buckingham Ave.
   Farmingdale, NY 11735</p>
</div>
<div className='location'>
<div>
<img src={Location} alt="" /> 
</div>
 <p>70 West Buckingham Ave.
   Farmingdale, NY 11735</p>
</div>
<div className='location'>
<div>
<img src={Location} alt="" /> 
</div>
 <p>70 West Buckingham Ave.
   Farmingdale, NY 11735</p>
</div>
<div></div>
 </Blog>
  )
}
