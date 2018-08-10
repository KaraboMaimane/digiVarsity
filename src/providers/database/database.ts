import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }
  CreateCourse(course: string, description: string, price: number, image: string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO users (course, description, price, image) VALUES (?, ?, ?, ?)";// this will be our sql statement
      this.db.executeSql(sql, [course, description, price, image])//we run our sql statement and insert our parameters
      .then((data) =>{
        resolve(data);//will return our data object if correctly executed 
      }, (error) => {
        reject(error);//will return an error if it has failed
      });
    });
  }

  GetAllCourses(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM courses", []).then((data) => {
        let arrayCourses = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
          	//we are going to want to retrieve all columns in our db and store them in an array
            arrayCourses.push({
              id: data.rows.item(i).id,
              course: data.rows.item(i).course,
              description: data.rows.item(i).description,
              price: data.rows.item(i).prices,
              image: data.rows.item(i).image
            });            
          }          
        }
        resolve(arrayCourses);//will return our courses array
      }, (error) => {
        reject(error);
      })
    })
  }

  updateCourse(course: string, description: string, price: number, image: string, id: number) {
    return new Promise((resolve, reject) => {
    	let sql = 'UPDATE courses SET course=?, description=?, price=?, image=? WHERE id=?';
    	this.db.executeSql(sql, [course, description, price, image, id])
    	.then((data) =>{
    		resolve(data);
    	}, (error) =>{
    		reject(error);
    	})
    });
  }

  deleteCourse(id: number){
        return this.db.transaction((tx) => {
      let sql = 'DELETE FROM posts WHERE id=?';
      tx.executeSql(sql, [id], function (tx, res) {
        console.log("removeId: " + res.insertId);
        console.log("rowsAffected: " + res.rowsAffected);
      },
        function (tx, error) {
          console.log('DELETE error: ' + error.message);
        })
    })
  }

}

