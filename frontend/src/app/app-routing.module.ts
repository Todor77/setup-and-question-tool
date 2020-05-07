import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent} from "./about/about.component";
import { ContactComponent} from "./contact/contact.component";
import { HomeComponent} from "./home/home.component";
import { LoginComponent} from "./login/login.component";
import {ProjectsComponent} from "./projects/projects.component";
import {QuestionsComponent} from "./_components/questions/questions.component";
import {QuestionComponent} from "./_components/question/question.component";
import {ProjectComponent} from "./project/project.component";
import {AuthGuardService} from "./_common/services/auth/auth-guard.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'questions/:id', component: QuestionComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
