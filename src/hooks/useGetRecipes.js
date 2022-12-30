import axios from "axios";
import { useEffect, useState } from "react";

const useGetRecipes = (searchCriteria) => {
  const [recipes, setRecipes] = useState([]);
  const [maxResults, setMaxResults] = useState(0);
  // let apiKey = "669fc358af1d44cfab131b0cb39fe7f3";
  let apiKey = "b31d5067b03a40718ae2bc354343cd66";
  const [areResultsLoading, setAreResultsLoading] = useState(true);

  function handleDietsChange() {
    console.log(
      "vegetarian" + searchCriteria.diets.map((diet) => `,${diet}`).join("")
    );
    return "vegetarian" + searchCriteria.diets.map((diet) => `|${diet}`);
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${
    searchCriteria.searchedWords
  }&diet=${"vegetarian," + searchCriteria.diets}&number=10&offset=${
    searchCriteria.page * 10
  }&maxReadyTime=${
    searchCriteria.maxTimeInMins
  }&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: "b31d5067b03a40718ae2bc354343cd66",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRecipes(res.data.results);
        setMaxResults(res.data.totalResults);
        setAreResultsLoading(false);
        console.log("Changing results");
      });
  }, [searchCriteria]);
  return { recipes, maxResults, areResultsLoading };
};

export default useGetRecipes;
