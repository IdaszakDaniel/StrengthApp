import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  exercises: string = [];
  constructor() { }

  ngOnInit() {
    this.exercises = ['bicep','back','calves','delts','traps']
  }

}
