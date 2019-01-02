import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  index
  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.myHttp.get('http://127.0.0.1:3000')
  }

}
