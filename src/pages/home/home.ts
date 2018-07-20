import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import courseArray, { Course } from '../../assets/resources/course';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  courseArray = courseArray;
  
 
  url: string = "../../assets/imgs/plus_PNG73.png";
  course: any;
  index: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, private action: ActionSheetController) {

  }
  ionViewDidLoad(){
    if(this.navParams.get('course') != null && this.navParams.get('index') != null){
      console.log(this.navParams.get('course'), this.navParams.get('index'))
    }
  }
  ngOnInit(){
    if(this.navParams.get('course') != null || this.navParams.get('index') != null){
      this.courseArray.push(this.navParams.get('course'));
      this.course = this.navParams.get('course');
      this.index = this.navParams.get('index')
    }

  }

  addPage(){
    this.navCtrl.push(AddPage);
  }

  details(i){
    const action = this.action.create({
      title: 'What action do you want to take with this course?',
      buttons: [
        {
          text: 'Edit The Course',
          handler: () =>{
              this.navCtrl.push(EditPage, {course: this.courseArray[i], index: i});
          }
        },
        {
          text: 'Delete The Course',
          handler: () =>{
              courseArray.splice(i, 1);
          }
        }
      ]
    });
    action.present();
  }
}
