import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'),
    new Recipe('Test recipe 2','This is a test recipe','https://thenypost.files.wordpress.com/2019/09/junk-food-turns-kid-blind.jpg?quality=90&strip=all&w=618&h=410&crop=1')
  ];


  constructor() {
   }

  ngOnInit() {
  }

}
