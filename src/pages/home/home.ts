import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = 'RandomPage'; 
  tab2Root: any = 'CategoriesPage'; 
  tab3Root: any = 'FavoritesPage';


  constructor(public navCtrl: NavController) {

  }

}
