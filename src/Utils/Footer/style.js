import styled from "styled-components";

const Blok=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;
max-width: 1440px;
margin: 0 auto;
margin-top: 50px;

`

const Foot=styled.div`
width: 100%;
>div{
    display: flex;
    font-size: 23px;
}
>p{
    cursor: pointer;
}

`
const Foote=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
>p{
cursor: pointer;
}
>div{

}
.iconb{
    color: #92c69a;
    font-size: 23px;
    cursor: pointer;    
}
`
const Width=styled.div`
width: 100%;
max-width: 1400px;
margin: 0 auto;
border: 1px solid rgba(70, 163, 88, 0.2); ;
`
const FooterText=styled.h2`
text-align: center;
margin: 10px  0px ;
`
export {Foot,Blok,Foote,Width,FooterText}