import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

function Home() {
  const [recipes, setRecipes] = useState([])
  const [searchCriteria, setSearchCriteria] = useState([])

  let apiKey = 'b31d5067b03a40718ae2bc354343cd66'
  useEffect(()=>{
    //setRecipes([mockState])

    let url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=10&instructionsRequired=true&addRecipeInformation=true&apiKey=${apiKey}`
    axios.get(url, {
      headers: {
        'authorization': 'b31d5067b03a40718ae2bc354343cd66',
        'Content-Type': 'application/json'
      }}).then(res => {setRecipes(res.data.results);})
  }, [])
  return (
    <div className="App">
    
      {/* <SearchBar /> */}
      
      {recipes.map(recipe =>{
        return (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe}/>
          </div>

)
})}
    </div>

  );
}

export default Home;
