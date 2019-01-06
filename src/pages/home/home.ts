import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { LoginPage } from '../login/login'
import { SearchPage } from '../search/search'
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  carouselImgs = []
  rushProducts = []
  recProduct = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient) {
  }
  init() {
    this.myHttp.get('http://127.0.0.1:3000/index/getCarousel').subscribe((res: any) => {
      // console.log(res)   // res: [{},{}...]
      this.carouselImgs = res
    })
    this.myHttp.get('http://127.0.0.1:3000/index/getQgProduct').subscribe((res: any) => {
      this.rushProducts = res
    })
    this.myHttp.get('http://127.0.0.1:3000/index/getProduct').subscribe((res: any) => {
      console.log(res)
      this.recProduct = res
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.init()
  }
  handleLogin() {
    this.navCtrl.push(LoginPage)
  }
  handleSearch() {
    this.navCtrl.push(SearchPage)
  }
}
