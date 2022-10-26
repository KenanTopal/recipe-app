import React from "react";
import { useLocation } from "react-router-dom";
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngContainer, OtherPart } from './DetailsStyle'
import dietSvg from '../../assets/diet.svg'

const Details = () => {

  const { state: { recipe } } = useLocation();
  console.log(recipe);

  const nutrients = ['CA', 'CHOCDF', 'CHOLE', 'ENERC_KCAL', 'FAT', 'PROCNT', 'NA', 'MG', 'WATER']

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="details" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h1>Nutrients</h1>
        {/*   <p>{recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>{recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>{recipe.totalNutrients.CHOLE.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>{recipe.totalNutrients.ENERC_KCAL.label} :
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalNutrients.FAT.label} :
            {Math.round(recipe.totalNutrients.FAT.quantity)}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p>{recipe.totalNutrients.PROCNT.label} :
            {Math.round(recipe.totalNutrients.PROCNT.quantity)}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
         
          <p>{recipe.totalNutrients.NA.label} :
            {Math.round(recipe.totalNutrients.NA.quantity)}
            {recipe.totalNutrients.NA.unit}
          </p>
          <p>{recipe.totalNutrients.MG.label} :
            {Math.round(recipe.totalNutrients.MG.quantity)}
            {recipe.totalNutrients.MG.unit}
          </p>
          <p>{recipe.totalNutrients.WATER.label} :
            {Math.round(recipe.totalNutrients.WATER.quantity)}
            {recipe.totalNutrients.WATER.unit}
          </p> */}
          {nutrients.map((key,index)=>(
            <p>
              {recipe.totalNutrients[key].label}:{' '}
              {Math.round(recipe.totalNutrients[key].quantity)}{' '}
              {recipe.totalNutrients[key].unit}
            </p>
          ))}
          <p>Calories : {Math.round(recipe.calories)}

          </p>
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>
        <IngContainer>
          {recipe.ingredientLines.map((line,index)=>
            <div key={index.toString()}>
              <p>{index +1} . {line}</p>
            </div>
          )}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;