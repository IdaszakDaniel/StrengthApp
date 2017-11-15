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
  plans: any = [];
  currentWorkout: any = ["title" : "test"];
  chooseWorkout: boolean = true;

  constructor(workoutsListService:WorkoutsListService) {
    this.workoutsList = workoutsListService;
  }

  ngOnInit() {
    this.titles = this.workoutsList.getWorkoutTitles();
    this.plans = this.workoutsList.getWorkoutPlan();
  }

  getWorkout(id){
    this.chooseWorkout = false;
    this.currentWorkout = this.workoutsList.getWorkout(id);
  }

}
