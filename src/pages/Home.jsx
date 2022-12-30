import { useState } from "react";
import EmptyResults from "../components/EmptyResults";
import RecipeCard from "../components/RecipeCard";
import ScrollingButtons from "../components/ScrollingButtons";
import SearchBar from "../components/SearchBar";
import useGetRecipes from "../hooks/useGetRecipes";
import "./Home.css";
import Loading from "../components/Loading";

function Home({}) {
  const [searchCriteria, setSearchCriteria] = useState({
    page: 0,
    searchedWords: "",
    diets: [],
    maxTimeInMins: 200,
  });
  const { recipes, maxResults, areResultsLoading } =
    useGetRecipes(searchCriteria);

  function changeSearchedWords(words) {
    setSearchCriteria((prev) => ({ ...prev, page: 0, searchedWords: words }));
  }

  function changeDiets(dietList) {
    setSearchCriteria((prev) => ({ ...prev, page: 0, diets: dietList }));
    console.log(searchCriteria);
  }

  function changeMaxTime(time) {
    setSearchCriteria((prev) => ({ ...prev, page: 0, maxTimeInMins: time }));
  }

  function handlePreviousPage() {
    setSearchCriteria((prev) => ({ ...prev, page: (prev.page -= 1) }));
    window.scrollTo(0, 0);
  }
  function handleNextPage() {
    setSearchCriteria((prev) => ({ ...prev, page: (prev.page += 1) }));
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <SearchBar
        handleResearch={(words) => changeSearchedWords(words)}
        handleDiets={(dietList) => changeDiets(dietList)}
        handleTime={(time) => changeMaxTime(time)}
        searchCriteria={searchCriteria}
      />

      <ScrollingButtons
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={searchCriteria.page}
        maxResults={maxResults}
      />

      {areResultsLoading && <Loading />}
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} id={recipe.id} />
            </div>
          );
        })}
      {recipes.length === 0 && !areResultsLoading && <EmptyResults />}

      <ScrollingButtons
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={searchCriteria.page}
        maxResults={maxResults}
      />
    </div>
  );
}

export default Home;
