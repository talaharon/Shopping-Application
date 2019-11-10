import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwifncW-o9_lAhUNZVAKHaUTDwIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.thrillist.com%2Fnews%2Fnation%2Fblack-friday-food-deals-2018&psig=AOvVaw0U3Xp_XRCC8ouZ8jAC--Xn&ust=1573462703207538')
  ]


  constructor() {
   }

  ngOnInit() {
  }

}
