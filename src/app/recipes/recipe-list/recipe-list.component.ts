import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVCuSzGC189ACUZbxCZfgoPS6s0E_tdkK0meKElud6uYBWjf4Uw'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
