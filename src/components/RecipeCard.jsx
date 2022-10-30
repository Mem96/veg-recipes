import './RecipeCard.css';
import veganIcon from '../assets/icons/004-vegan-food.png';
import glutenFreeIcon from '../assets/icons/002-gluten-free.png';
import sustainableIcon from '../assets/icons/003-biodegradable.png';
import dairyFreeIcon from '../assets/icons/001-dairy-free.png';

const RecipeCard = ({recipe}) => {
const summary = recipe.summary
function createMarkup() {
  return {__html: summary};
}

  return (
    <div className='card-container'>
        <img className='card-img'src={recipe.image}/>
        <h1 className='card-title'>{recipe.title}</h1>
        {recipe.vegan && <img className='tag-icons' src={veganIcon}/>}
        {recipe.dairyFree && <img className='tag-icons' src={dairyFreeIcon}/>}
        {recipe.glutenFree && <img className='tag-icons' src={glutenFreeIcon}/>}
        {recipe.sustainable && <img className='tag-icons' src={sustainableIcon}/>}
        {<div dangerouslySetInnerHTML={createMarkup()} />}
    </div>
  )
}

export default RecipeCard