import styled from "styled-components";


const Blog=styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
background: #FBFBFB;
display: flex;
justify-content: space-between;
`
const Container=styled.div`
display: flex;
justify-content: space-evenly;
`
const Product=styled.div`
width: 300px;
height: 200px;
padding-left: 40px;
border-right: 1px solid  rgba(70, 163, 88, 0.1);
`
export {Blog,Container,Product}