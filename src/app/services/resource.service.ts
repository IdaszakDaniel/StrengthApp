import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {

  constructor(public http:Http) {
  }

  getData(){
  	return this.http.get('assets/workout.json').map(res => res.json());
  }//assets/workout.json http://localhost:8080/api/workouts

  postData(el){
    let id = `5a5269663417e70416f1b7c3`;
  	return this.http.put(`http://localhost:8080/workouts/${id}`, el).subscribe(res => {
          console.log("it worked!");
        }, (err) => {
          console.log(err);
        }
      );
  }

}
