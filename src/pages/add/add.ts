import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import courseArray, { Course } from '../../assets/resources/course';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  url: string = "../../assets/imgs/plus_PNG73.png";
  courseName: string;
  decription: string;
  pricing: number;
  rating: number [] = [1,2,3,4,5];
  ratingScore: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  assignName(event){this.courseName = event.target.value;}
  assignDescription(event){this.decription = event.target.value}
  assignPrice(event){this.pricing = event.target.value}
  
  add(){
    let course = new Course(this.url, this.courseName, this.decription, this.pricing);
    this.navCtrl.push(HomePage,{
      course: course
    });
  }
}
