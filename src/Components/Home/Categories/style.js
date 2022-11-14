import styled from "styled-components";


const Blog=styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
background: #FBFBFB;
display: grid;
grid-template-columns: auto auto ;
`
const Container=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
`
const Product=styled.div`
padding-left: 40px;
border-right: 1px solid  rgba(70, 163, 88, 0.1);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`
const TextBox=styled.div`
padding: 10px;
width: 300px;
>div{
 display:  flex;
align-items: center;


 >input{
    border: none;
    padding: 15px;
 }
}
.pdsp{
}
`


export {Blog,Container,Product,TextBox}