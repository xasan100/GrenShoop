import React from 'react'
import { Blog, Container, Product, TextBox } from './style'
import Gul1 from "../../../Assets/image/Category.png"
import Gul2 from "../../../Assets/image/Category2.png"
import Button from '../../../Generic/Button'


export const Categoris = () => {
  return (
    <Blog>
<Container>
<Product>
<div><img src={Gul2} alt="" /></div>
<h3>Garden Care</h3>
<p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
</Product>

<Product>
<div><img src={Gul2} alt="" /></div>
<h3>Plant Renovation</h3>
<p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>

</Product>
<Product>
<div><img src={Gul2} alt="" /></div>
<h3>Watering Graden</h3>
<p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
</Product>
</Container>

<TextBox>
  <h3>Would you like to join newsletters?</h3>
<div>
<input type="text" placeholder='enter your email addre....'/>
<Button>Join</Button>
 </div>
 <div>
<p>
We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
</p>
 </div>

</TextBox>

    </Blog>
  )
}
