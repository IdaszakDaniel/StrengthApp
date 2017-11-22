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

  bodyParts: string[];
  type: string;
  name: string;
  exercises: any;
  plans: any;
  initialState: boolean = true;
  title: string;
  addWorkout;
  workoutsList;
  @ViewChild(RepsSetsComponent) repsSets:RepsSetsComponent;

  constructor(addWorkoutService:AddWorkoutService, workoutsListService:WorkoutsListService) {
    this.addWorkout = addWorkoutService;
    this.workoutsList = workoutsListService;
    this.workoutsList.fetchWorkouts();
  }

  ngOnInit() {
    this.bodyParts = ['bicep','back','calves','delts','traps'];
    this.workoutsList.fetchWorkouts();

    this.addWorkout.workoutUpdated.subscribe(
      (exercises) => {
        this.exercises = exercises;
      }
    );

    this.workoutsList.PlanUpdated.subscribe(
      (plans) => {
        this.plans = plans;
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
    this.workoutsList.setWorkoutDay(this.exercises, this.title);
    this.addWorkout.resetCurrentWorkout();
    this.initialState = true;
  }

  deleteExercise(el){
    this.addWorkout.deleteExercise(el);
  }

  deletePlan(el){
    this.workoutsList.deletePlan(el);
  }

  editPlan(el){
    if(this.initialState){
      this.initialState = false;
      this.workoutsList.deletePlan(el);
      this.addWorkout.editWorkout(el);
    }
  }

}
