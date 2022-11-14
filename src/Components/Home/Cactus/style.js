import styled from 'styled-components';
const Bloclk=styled.div`
display: grid;
grid-template-columns: auto auto;
height: auto;
max-width: 1440px;
width: 100%;
margin: 0 auto;
margin-top: 800px;
`
const Box1 =styled.div`
width: 100%;
>div{
    display: flex   ;
    justify-content: space-evenly;
    align-items: center;
}
`
const  TextBox=styled.div`
>h3{
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 20px;
text-transform: uppercase;
color:#70b77c;
}
>p{
 font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */
color: #3D3D3D;
}

`
const Box2 =styled.div`
width: 100%;
>div{ display: flex   ;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}
`
export { Bloclk,Box1,Box2,TextBox};