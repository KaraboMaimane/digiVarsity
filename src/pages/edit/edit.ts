import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import courseArray, { Course } from '../../assets/resources/course';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage implements OnInit {
  course;
  index: number;
  courseName: string;
  decription: string;
  pricing: number;
  url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  ngOnInit() {
    this.course = this.navParams.get('course');
    this.index = this.navParams.get('index');
  }

  insertImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  assignName(event) { this.courseName = event.target.value; }
  assignDescription(event) { this.decription = event.target.value }
  assignPrice(event) { this.pricing = event.target.value }

  edit() {
    const alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Are you sure you want to commit to these changes?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            if (
              this.url != null &&
              this.courseName != null &&
              this.assignDescription != null &&
              this.pricing != null) {
                let course = new Course(this.url, this.courseName, this.decription, this.pricing);
                courseArray.splice(this.index, 1, course);
                this.navCtrl.push(HomePage);
            }else{
              const alert = this.alertCtrl.create({
                title: 'Invalid Data',
                subTitle: 'The data you have entered is invalid, please try again',
                buttons: [
                  {
                    text: 'Okay'
                  }
                ]
              });
              alert.present();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
