'use strict';

var recipe = [{flour: "12 oz"}, {water: "1L"}];
function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  return addIngredient(recipe, ingredient, amount);
}

function readRecipe(recipe) {
  for (var ingredient of Object.keys(recipe)) {
    console.log(`this recipe calls for ${recipe[ingredient]} of ${ingredient}`)
  }
}
