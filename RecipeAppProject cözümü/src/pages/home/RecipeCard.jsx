import React from 'react'
import { Button, Cards, RecipeHeader, RecipeImage } from './HomeStyles';
import { useNavigate } from 'react-router-dom';




const RecipeCard = ({i}) => {

let navigate = useNavigate()


  console.log(i);
  return (
    <Cards>
    <RecipeHeader>
{i.label}
    </RecipeHeader>
    <RecipeImage src={i.image}/>
    <Button onClick={()=>{navigate("/details", {state:{i}})}} >Details</Button>

    </Cards>
  )
}

export default RecipeCard