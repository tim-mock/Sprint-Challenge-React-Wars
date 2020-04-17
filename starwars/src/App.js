import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

// const url = 'https://swapi.py4e.com/api/'
const url = 'https://swapi.py4e.com/api/people/'

const FlexBox = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin: 5%;

`
const Title = styled.h1 `
font-size: 8rem;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWars, setStarWars] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(res => {
        
        setStarWars(res.data.results)
        console.log(setStarWars)
      })
      .catch(err =>
        console.log('error'))
  }, [])



  return (
    <div className="App">
      <Title className="Header">Characters</Title>
      <FlexBox>
      {starWars.map((item) =>{
return <Character pName={item.name} pHeight={item.height} pMass={item.mass} pHair={item.hair_color} pSkin={item.skin_color} />;

})}
     

      </FlexBox>


     
      
    </div>
  );
}

export default App