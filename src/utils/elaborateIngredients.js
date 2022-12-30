export function elaborateIngredients(stepList) {
  const ingredients = [];
  stepList.map((step) => {
    step.ingredients.map((ingr) => {
      if (!ingredients.includes(ingr.name)) {
        ingredients.push(ingr.name);
      }
    });
  });
  return ingredients;
}
