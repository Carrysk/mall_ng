import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  carouselImgs = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.myHttp.get('http://127.0.0.1:3000/index/getCarousel').subscribe((res: any)=>{
      console.log(res)   // res: [{},{}...]
      this.carouselImgs = res
    })
  }

}
