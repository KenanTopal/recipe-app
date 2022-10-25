import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";

const Form = ({ meal, setMeal, query, setQuery, mealTypes, getData }) => {
  const handleChange = (e) => {
    setMeal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search"
      />
      <Button>Search</Button>
      <Select name="mealTypes" id="mealTypes" onChange={handleChange}>
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;