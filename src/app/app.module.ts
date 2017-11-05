import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatFormFieldModule, , MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { RepsSetsComponent } from './components/reps-sets/reps-sets.component';

const appRoutes: Routes = [
  {path: '', component: NewWorkoutComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewWorkoutComponent,
    NavbarComponent,
    StatsComponent,
    RepsSetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
