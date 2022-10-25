import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const [recipe, setRecipe] = useState([]);
  console.log(query);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const result = await axios.get(url);
    setRecipe(result.data.hits);
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
    </div>
  );
};

export default Home;