import React from 'react'
import { Blog, Container, Product } from './style'
import Gul1 from "../../../Assets/image/Category.png"
import Gul2 from "../../../Assets/image/Category2.png"


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
<div>23</div>

    </Blog>
  )
}
