import React from 'react'
import { Button, Cards, RecipeHeader, RecipeImage } from './HomeStyles';

const RecipeCard = ({i}) => {
  console.log(i);
  return (
    <Cards>
    <RecipeHeader>
{i.label}
    </RecipeHeader>
    <RecipeImage src={i.image}/>
    <Button>Details</Button>

    </Cards>
  )
}

export default RecipeCard