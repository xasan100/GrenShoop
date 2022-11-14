import styled from "styled-components";

const Blog=styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
background: rgba(70, 163, 88, 0.1);
height: 20vh;
margin-top: 120px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr  1fr;
align-items: center;
>div{
width: 100%;
align-items: center;
padding-left: 30px;
>p{
    width: 90%;
    padding-left: 10px;
}
}
.location{
    display: flex;
}
`

export {Blog}