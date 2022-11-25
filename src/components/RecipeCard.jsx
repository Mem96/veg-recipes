import './RecipeCard.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import veganIcon from '../assets/icons/004-vegan-food.png';
import glutenFreeIcon from '../assets/icons/002-gluten-free.png';
import sustainableIcon from '../assets/icons/003-biodegradable.png';
import dairyFreeIcon from '../assets/icons/001-dairy-free.png';
import { cutDescription} from '../utils/elaborateDescription';

const RecipeCard = ({recipe, id}) => {
const summary = cutDescription(recipe.summary);

function createMarkup() {
  return {__html: summary};
}


return (
    <div className='card-container'>
        <img className='card-img'src={recipe.image} alt={`${recipe.title} image`}/>
        <h2 className='card-title'>{recipe.title}</h2>
        <div>
            {recipe.vegan && <img className='tag-icons' alt='vegan' src={veganIcon}/>}
            {recipe.dairyFree && <img className='tag-icons' alt='dairy free' src={dairyFreeIcon}/>}
            {recipe.glutenFree && <img className='tag-icons' alt='gluten free' src={glutenFreeIcon}/>}
            {recipe.sustainable && <img className='tag-icons' alt='sustainable' src={sustainableIcon}/>}
        </div>
        {<p dangerouslySetInnerHTML={createMarkup()}/>}
      <Link to={`recipe/${id}`} state={{recipe: recipe}}>
        <button className='btn to-recipe-btn'>Go to recipe details!</button>
    </Link>
    </div>
  )
}

export default RecipeCard