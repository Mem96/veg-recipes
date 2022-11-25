import axios from 'axios';
import { useEffect, useState} from 'react';



const useGetRecipes = (searchCriteria) => {
    const [recipes, setRecipes] = useState([])
    const [maxResults, setMaxResults] = useState(0)
    let apiKey = '669fc358af1d44cfab131b0cb39fe7f3'
    const [areResultsLoading, setAreResultsLoading] = useState(true)


    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchCriteria.searchedWords}&&diet=vegetarian&number=10&offset=${searchCriteria.page*10}&instructionsRequired=true&addRecipeInformation=true&apiKey=${apiKey}`


    useEffect(()=>{
        axios.get(url, {
          headers: {
            'authorization': 'b31d5067b03a40718ae2bc354343cd66',
            'Content-Type': 'application/json'
          }}).then(res => {
            setRecipes(res.data.results);
            setMaxResults(res.data.totalResults)
            setAreResultsLoading(false)
          })
      }, [searchCriteria])
      return {recipes, maxResults, areResultsLoading};
}

export default useGetRecipes;

    