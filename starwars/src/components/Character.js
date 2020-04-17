// Write your Character component here
import React from 'react';
// import './components/App.css';
import styled from 'styled-components';

const StyledChar = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
height: 50%;
width:30%;
font-size:3rem;
background-color: rgba(170,232,170, 0.2);
text-align:center;
padding 0.5%;
margin: 2%;

border: 2px dotted black;
`

const StyledName = styled.p`
color:red;
background-color: blue;
width:30%;
text-align: center;
`
const StyledHeight = styled.p`
color:blue
// background-color: blue;
`
const StyledMass = styled.p`
color:brown;

margin: 0, auto;
`
const StyledColor = styled.p`

background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
`

function Charecter (props) {



    return (

        <StyledChar className='Char' >
<StyledName>{props.pName}</StyledName>
<StyledHeight>Height: {props.pHeight} cm?</StyledHeight>
<StyledMass>Mass: {props.pMass}kg</StyledMass>
<StyledColor>Haircolor: {props.pHair}, and skin color doesn't matter but its {props.pSkin} </StyledColor>
        </StyledChar>


    )
}
export default Charecter