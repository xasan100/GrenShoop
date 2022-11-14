import styled from "styled-components";

const Blog=styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
gap: 0px 20px;
justify-content: space-between;
padding: 30px;
`
const Product=styled.div`
width: 268px;
height: 400px;
:hover{
transform: scale(1.1);

}

`
const Text=styled.h1`
width: 100%;
text-align:  center;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 16px;
text-align: center;
color: #3D3D3D;
margin: 40px 0px;
`

const TextBox=styled.div`
padding-left: 10px;
padding-top: 10px;
>p{
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #46A358;
}

>h3{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
width: 70%;
/* or 130% */


color: #3D3D3D;

}
.pds{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #727272;   
}

`
export {Blog,Product,Text,TextBox}