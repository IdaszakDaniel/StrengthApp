import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WorkoutsListService } from '../../services/workouts-list.service';

@Component({
  selector: 'app-today-workout',
  templateUrl: './today-workout.component.html',
  styleUrls: ['./today-workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodayWorkoutComponent implements OnInit {

  workoutsList;
  titles: string[];
  currentWorkout: any = ["title" : "test"];

  constructor(workoutsListService:WorkoutsListService) {
    this.workoutsList = workoutsListService;
    this.titles = this.workoutsList.getWorkoutTitles();
  }

  ngOnInit() {
    this.titles = this.workoutsList.getWorkoutTitles();
  }

  getWorkout(id){
    this.currentWorkout = this.workoutsList.getWorkout(id);
    console.log(this.currentWorkout);
  }

}
