import React from 'react'
import { Bloclk,Box1,Box2,Conatiner1,Conatiner2, ImgBox, TextBox } from './style'
import Gul1 from "../../../Assets/image/gul1.png"
import Gul2 from "../../../Assets/image/gul2.png" 
import Barg from "../../../Assets/image/bargi.png" 
import Button from '../../../Generic/Button'


export const Cactus = () => {
  return (
    <Bloclk>
    <Box1>
<div>
 <img src={Gul1} alt="" />
<TextBox>
<h3>SUMER CACTUS</h3>
<h3>& SUCCULENTS</h3>
</TextBox>
</div>
   </Box1>
    <Box2>
  <div>
 <img src={Gul1} alt="" />
<TextBox>
<h3>SUMER CACTUS</h3>
<h3>& SUCCULENTS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit fugit saepe rerum pariatur facere! Consequuntur odit quo reprehenderit exercitationem sit inventore  </p>
<div>
<Button width={125}>Find More →</Button>
</div>
</TextBox>
</div>
    </Box2>
    </Bloclk>
  )
}

export default Cactus