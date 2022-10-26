import React from 'react'
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle'
import defaultImage from '../../assets/default-image.jpg';
import { useNavigate } from 'react-router-dom';

const RecipeCardComp = ({ recipe}) => {
  const navigate = useNavigate();
  const clickHandler = () =>  {
    navigate('details', {state: {recipe}})
  }
  return (
    <RecipeCard>
      <RecipeHeader> { recipe?.label }</RecipeHeader>
      <RecipeImage src={ recipe?.image ||  defaultImage} alt="recipe"/> 
      <Button onClick={clickHandler}>View More</Button>
    </RecipeCard>
  )
}

export default RecipeCardComp