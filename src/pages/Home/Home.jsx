import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import RecipeCardComp from "./RecipeCardComp";
import homeSvg from '../../assets/home.svg';

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const [recipes, setRecipes] = useState([]);
  

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    setQuery("");
  };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div>
      <Header
        meal={meal}
        setMeal={setMeal}
        query={query}
        setQuery={setQuery}
        mealTypes={mealTypes}
        getData={getData}
      />

      { recipes.length > 0 ? (
        <MainContainer>
          { recipes.map((recipe, index) => <RecipeCardComp key={ index.toString() } recipe={ recipe?.recipe } />) }
        </MainContainer>  
        
      ) : (
          <ImgDiv>
            <HomeImg src={ homeSvg} alt="home" />
          </ImgDiv>
      )
    
    }
    
    </div>
  );
};

export default Home;
