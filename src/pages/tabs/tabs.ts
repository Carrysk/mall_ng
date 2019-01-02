import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'
import { CartPage } from '../cart/cart'
import { UserCenterPage } from '../user-center/user-center'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  handleHome = HomePage;
  handleSearch = SearchPage;
  handleCart = CartPage;
  handleUser = UserCenterPage;

  constructor() {

  }
}
