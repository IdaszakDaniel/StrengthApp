import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { AddWorkoutService } from './services/add-workout.service';
import { WorkoutsListService } from './services/workouts-list.service';
import { WorkoutDaysService } from './services/workout-days.service';
import { ResourceService } from './services/resource.service';

import { AppComponent } from './app.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { RepsSetsComponent } from './components/reps-sets/reps-sets.component';
import { TodayWorkoutComponent } from './components/today-workout/today-workout.component';
import { SetDateComponent } from './components/set-date/set-date.component';

const appRoutes: Routes = [
  {path: '', component: NewWorkoutComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'today', component: TodayWorkoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewWorkoutComponent,
    NavbarComponent,
    StatsComponent,
    RepsSetsComponent,
    TodayWorkoutComponent,
    SetDateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    AddWorkoutService,
    WorkoutsListService,
    WorkoutDaysService,
    ResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
