import "./SearchBar.css";
import { useState } from "react";
import crossIcon from "../assets/icons/cross.svg";
import searchIcon from "../assets/icons/search.svg";

const SearchBar = ({
  handleResearch,
  handleDiets,
  handleTime,
  searchCriteria,
}) => {
  const [searchedWords, setSearchedWords] = useState("");

  const [openMoreOptions, setOpenMoreOptions] = useState(false);

  function handleSearchedWords(e) {
    setSearchedWords(e.target.value);
  }
  function clearSearchedWords() {
    setSearchedWords("");
    handleResearch("");
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleResearch(searchedWords);
    }
  }

  function handleDietChange(e) {
    console.log(searchCriteria.diets, "DIETS");
    if (searchCriteria.diets.includes(e.target.value)) {
      handleDiets(
        searchCriteria.diets.filter((elem) => elem !== e.target.value)
      );
    } else {
      handleDiets([...searchCriteria.diets, e.target.value]);
    }
  }

  function handleMaxTimeChange(e) {
    handleTime(e.target.value);
  }

  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        type="text"
        value={searchedWords}
        onChange={(e) => handleSearchedWords(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <button
        className="searchbar-btn search-btn"
        onClick={() => handleResearch(searchedWords)}
      >
        <img src={searchIcon} style={{ width: "15px", height: "15px" }} />
      </button>
      <button className="searchbar-btn cancel-btn" onClick={clearSearchedWords}>
        <img src={crossIcon} style={{ width: "15px", height: "15px" }} />
      </button>
      <div className="extended-searchbar">
        <button onClick={() => setOpenMoreOptions((prev) => !prev)}>
          {openMoreOptions ? "Hide more options" : "Show more options"}
        </button>
        <div
          className={
            openMoreOptions ? "extended-options" : "extended-options hidden"
          }
        >
          <div className="checkboxes">
            <input
              type="checkbox"
              id="vegan-option"
              value={"vegan"}
              onChange={(e) => handleDietChange(e)}
            />
            <label htmlFor="vegan-option" name="vegan-option">
              Vegan
            </label>
            <input
              type="checkbox"
              id="glutenFree-option"
              value={"gluten free"}
              onChange={(e) => handleDietChange(e)}
            />
            <label htmlFor="gletenFree-option" name="glutenFree-option">
              Gluten free
            </label>
            <input
              type="checkbox"
              id="diaryFree-option"
              value={"ovo-vegetarian"}
              onChange={(e) => handleDietChange(e)}
            />
            <label htmlFor="diaryFree-option">Diary free</label>
          </div>
          <div className="selects">
            <label htmlFor="select-time">
              Choose a max duration for your cooking:{" "}
            </label>
            <select id="select-time" onChange={(e) => handleMaxTimeChange(e)}>
              <option value={5}>5 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={90}>1 hour and a half</option>
              <option value={200} selected>
                Unlimited
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
