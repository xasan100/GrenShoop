import React from 'react'
import { Blog, Product, Text, TextBox } from './style'
import Img1 from "../../../Assets/image/01.png"
import Img2 from "../../../Assets/image/02.png"
import Img3 from "../../../Assets/image/03.png"
import Img4 from "../../../Assets/image/04.png"


export const Posts = () => {
  return (
  <> 
  <Text>Our Blog Posts</Text>
  <Blog>
<Product>
    <div>
        <img src={Img1} alt="" />
    </div>
<TextBox>
    <p>September 12  I Read in 6 minutes</p>
    <h3>Cactus & Succulent 
    Care Tips</h3>
    <p className='pds'>Cacti are succulents are easy care plants for any home or patio. </p>
    <b>Read More →</b>
</TextBox>
</Product>
<Product>
    <div>
        <img src={Img2} alt="" />
    </div>
    <TextBox>
    <p>September 12  I Read in 6 minutes</p>
    <h3>Cactus & Succulent 
    Care Tips</h3>
    <p className='pds'>Cacti are succulents are easy care plants for any home or patio. </p>
    <b>Read More →</b>
</TextBox>
</Product>
<Product>
<div>
        <img src={Img3} alt="" />
    </div> 
    <TextBox>
    <p>September 12  I Read in 6 minutes</p>
    <h3>Cactus & Succulent 
    Care Tips</h3>
    <p className='pds'>Cacti are succulents are easy care plants for any home or patio. </p>
    <b>Read More →</b>
</TextBox>
</Product>
<Product>
     <div>
        <img src={Img4} alt="" />
    </div>
    <TextBox>
    <p>September 12  I Read in 6 minutes</p>
    <h3>Cactus & Succulent 
    Care Tips</h3>
    <p className='pds'>Cacti are succulents are easy care plants for any home or patio. </p>
    <b>Read More →</b>
</TextBox>
</Product>
    </Blog>
    </>
  )
}

export default Posts