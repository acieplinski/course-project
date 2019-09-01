import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVCuSzGC189ACUZbxCZfgoPS6s0E_tdkK0meKElud6uYBWjf4Uw'),
    new Recipe('Another test recipe', 'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVCuSzGC189ACUZbxCZfgoPS6s0E_tdkK0meKElud6uYBWjf4Uw')
  ];


  getRecipes() {
    // exact copy of recipes
    return this.recipes.slice();
  }

}
