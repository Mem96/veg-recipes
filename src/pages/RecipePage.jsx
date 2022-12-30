import { useLocation } from "react-router-dom";
import glutenFreeIcon from "../assets/icons/002-gluten-free.png";
import sustainableIcon from "../assets/icons/003-biodegradable.png";
import veganIcon from "../assets/icons/004-vegan-food.png";
import dairyFreeIcon from "../assets/icons/001-dairy-free.png";
import { useEffect } from "react";
import {
  getRelatedRecipes,
  cutDescription,
} from "../utils/elaborateDescription";
import { elaborateIngredients } from "../utils/elaborateIngredients";

const RecipePage = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  const relatedRecipes = getRelatedRecipes(recipe.summary);
  const description = cutDescription(recipe.summary);
  const ingredients = elaborateIngredients(
    recipe.analyzedInstructions[0].steps
  );
  console.log(ingredients);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function createMarkup() {
    return { __html: description };
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <div>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
      <div>
        {recipe.vegan && (
          <img className="tag-icons" alt="vegan" src={veganIcon} />
        )}
        {recipe.dairyFree && (
          <img className="tag-icons" alt="dairy free" src={dairyFreeIcon} />
        )}
        {recipe.glutenFree && (
          <img className="tag-icons" alt="gluten free" src={glutenFreeIcon} />
        )}
        {recipe.sustainable && (
          <img className="tag-icons" alt="sustainable" src={sustainableIcon} />
        )}
      </div>
      {recipe.dishTypes.length > 0 && (
        <div>
          <h3>Type of dish</h3>
          <p>This recipe is suggested as:</p>
          <ul>
            {recipe.dishTypes.map((occasion, i) => (
              <li key={i}>{occasion}</li>
            ))}
          </ul>
        </div>
      )}
      {recipe.cuisines.length > 0 && (
        <div>
          <h3>Cuisines</h3>
          <p>This recipe belongs to these cuisines:</p>
          <ul>
            {recipe.cuisines.map((cuisine, i) => (
              <li key={i}>{cuisine}</li>
            ))}
          </ul>
        </div>
      )}
      {recipe.occasions.length > 0 && (
        <div>
          <h3>Special occasions</h3>
          <p>This recipe is suggested for these occasions:</p>
          <ul>
            {recipe.occasions.map((occasion, i) => (
              <li key={i}>{occasion}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Instructions</h3>
        <p>
          <b>Servings:</b> {recipe.servings}
        </p>
        <p>
          <b>Ingredients:</b>
        </p>
        <ul>
          {ingredients.map((ingr, i) => (
            <li key={i}>{ingr}</li>
          ))}
        </ul>
        <p>
          Ready in <b>{recipe.readyInMinutes} minutes</b>.
        </p>
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step, i) => (
            <li key={i}>{step.step}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3>Similar recipes:</h3>
        <ul>
          {relatedRecipes.map((r, i) => (
            <li key={i}>
              <a href={r.linkToRelatedRecipe}>{r.nameOfRelatedRecipe}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
