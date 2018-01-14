import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { WorkoutsListService } from '../../services/workouts-list.service';
import { WorkoutDaysService } from '../../services/workout-days.service';
import { UserSettingsService } from '../../services/user-settings.service';
import { SetDateComponent } from '../set-date/set-date.component';

@Component({
  selector: 'app-today-workout',
  templateUrl: './today-workout.component.html',
  styleUrls: ['./today-workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodayWorkoutComponent implements OnInit {

  workoutsList;
  workoutDays;
  titles: string[];
  weight: any[] = [];
  plans: any = [];
  maxes: any;
  userSettings;
  currentWorkout: any = [];
  chooseWorkout: boolean = true;
  @ViewChild(SetDateComponent) setDate:SetDateComponent;

  constructor(workoutsListService:WorkoutsListService, workoutDaysService:WorkoutDaysService, userSettingsService: UserSettingsService) {
    this.workoutsList = workoutsListService;
    this.workoutDays = workoutDaysService;
    this.userSettings = userSettingsService;
  }

  ngOnInit() {
    this.titles = this.workoutsList.getWorkoutTitles();
    this.plans = this.workoutsList.getWorkoutPlan();
    this.maxes = this.userSettings.getMaxes();

    this.setDate.NextDay.subscribe(
      () => {
        this.currentWorkout = [];
        this.chooseWorkout = true;
        this.fetchDay();
      }
    );
  }

  fetchDay(){
      let obj = this.workoutDays.getDay(this.setDate.getCurrentDate());
      if(obj !== undefined){
        this.currentWorkout = obj[1];
        this.chooseWorkout = false;
      }
  }

  getWorkout(id){
    this.chooseWorkout = false;
    this.currentWorkout = this.workoutsList.getWorkout(id);
    this.currentWorkout.workout.forEach(el => {
      el.exercise = el.reps.map(el => "");
    });
    this.setAdditionalFields();
    this.workoutDays.setDay(this.currentWorkout, this.setDate.getCurrentDate());
    this.currentWorkout.id = this.workoutDays.getId();
  }

  setAdditionalFields() {
    this.currentWorkout.workout.forEach(el => {
      if(el.name == "Benchpress") el.max = this.maxes.bench;
      if(el.name == "Press") el.max = this.maxes.press;
      if(el.name == "Squat") el.max = this.maxes.squat;
      if(el.name == "Deadlift") el.max = this.maxes.dl;
      el.warmup = `5x${Math.floor(0.5*el.max)} 3x${Math.floor(0.7*el.max)} 1x${Math.floor(0.9*el.max)}`;
      //console.log("was?",this.workoutDays.findExercise(el.name));
    });
  }

}
