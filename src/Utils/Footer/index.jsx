import React from 'react'
import { Blok, Foot, Foote, FooterText, Width } from './style'
import { AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <Blok>
<Foot>
  <h3>My Account</h3>
  <p>My Account</p>
  <p>Address</p>
  <p>Wishlist</p>
</Foot>
<Foot>
  <h3>Categories</h3>
  <p> House Plants</p>
  <p> Potter Plants</p>
  <p>Seeds</p>
  <p>Small Plants</p>
  <p>Accessories</p>
</Foot>
<Foote>

  <h3>Social Media</h3>
  <h3>
  We accept
  </h3>
<div>
<AiFillInstagram className='iconb'/>
  <AiFillFacebook className='iconb'/>
  <AiFillTwitterCircle className='iconb'/>
  <AiFillLinkedin className='iconb'/>
  <AiFillYoutube className='iconb'/>
</div>
<p>We accept</p>
</Foote>
 </Blok>
 <Width> </Width>
 <FooterText> © 2021 GreenShop. All Rights Reserved.</FooterText>
 </>
  )
}

export default Footer