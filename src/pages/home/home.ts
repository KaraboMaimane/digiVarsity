import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Course } from '../../assets/resources/course';
import { AddPage } from '../add/add';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  course = new Course("../../assets/imgs/stefan-stefancik-257625-unsplash.jpg" ,"BSc Computer Sciences", "Computer Science is the study of computers and computational systems", 2000);
  url: string = "../../assets/imgs/plus_PNG73.png";

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter(){
  }

  addPage(){
    this.navCtrl.push(AddPage);
  }
}
