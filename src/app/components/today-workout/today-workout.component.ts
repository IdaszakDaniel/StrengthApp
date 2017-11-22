import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { WorkoutsListService } from '../../services/workouts-list.service';
import { WorkoutDaysService } from '../../services/workout-days.service';
import { SetDateComponent } from '../set-date/set-date.component';

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
  currentWorkout: any = [];
  chooseWorkout: boolean = true;
  @ViewChild(SetDateComponent) setDate:SetDateComponent;

  constructor(workoutsListService:WorkoutsListService, workoutDaysService:WorkoutDaysService) {
    this.workoutsList = workoutsListService;
    this.workoutDays = workoutDaysService;
  }

  ngOnInit() {
    this.titles = this.workoutsList.getWorkoutTitles();
    this.plans = this.workoutsList.getWorkoutPlan();

    this.setDate.NextDay.subscribe(
      () => {
        this.chooseWorkout = true;
      }
    );

  }

  getWorkout(id){
    this.chooseWorkout = false;
    this.currentWorkout = this.workoutsList.getWorkout(id);
    //console.log(this.setDate.getCurrentDate()); //date data
    this.workoutDays.setDay(this.currentWorkout, this.setDate.getCurrentDate());
  }

}
