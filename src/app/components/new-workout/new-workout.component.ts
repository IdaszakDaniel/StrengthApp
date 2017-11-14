import { Component, OnInit, ViewChild } from '@angular/core';
import { RepsSetsComponent } from '../reps-sets/reps-sets.component';
import { AddWorkoutService } from '../../services/add-workout.service';
import { WorkoutsListService } from '../../services/workouts-list.service';



@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  exercises: string[];
  type: string;
  name: string;
  workouts: any;
  plans: any = [];
  initialState: boolean = true;
  addWorkout;
  workoutsList;
  @ViewChild(RepsSetsComponent) repsSets:RepsSetsComponent;

  constructor(addWorkoutService:AddWorkoutService, workoutsListService:WorkoutsListService) {
    this.addWorkout = addWorkoutService;
    this.workoutsList = workoutsListService;
  }

  ngOnInit() {
    this.exercises = ['bicep','back','calves','delts','traps'];
    this.plans = this.workoutsList.getWorkoutPlan();

    this.addWorkout.workoutUpdated.subscribe(
      (workout) => {
        this.workouts = workout;
      }
    );

  }

  newWorkout(){
    this.initialState = false;
  }

  addExercise(){
    this.addWorkout.setExercise(this.type,
                        this.name,
                        this.repsSets.getSets(),
                        this.repsSets.getSetsReps());
  }

  saveWorkout(){
    this.workoutsList.setWorkoutDay(this.workouts);
    this.addWorkout.resetCurrentWorkout();
    this.workouts = [];
    this.plans = this.workoutsList.getWorkoutPlan();
    this.initialState = true;
  }

}
