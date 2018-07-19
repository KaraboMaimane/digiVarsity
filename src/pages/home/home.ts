import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import courseArray, { Course } from '../../assets/resources/course';
import { AddPage } from '../add/add';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  courseArray = courseArray;
  
 
  url: string = "../../assets/imgs/plus_PNG73.png";

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }
  ionViewOnLoad(){

  }
  ngOnInit(){
    if(this.navParams.get('course') != null || this.navParams.get('course') != undefined){
      this.courseArray.push(this.navParams.get('course'));
      console.log(this.courseArray);
    }
  }

  addPage(){
    this.navCtrl.push(AddPage);
  }

  details(){
    alert("hello");
  }
}
