import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './_components/user/user.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProjectsComponent } from './projects/projects.component';
import { QuestionsComponent } from './_components/questions/questions.component';
import { QuestionComponent } from './_components/question/question.component';
import { ProjectComponent } from './project/project.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewQuestionComponent } from './_components/new-question/new-question.component';
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './_common/search/search.pipe';
import {HttpXsrfInterceptor} from "./HttpXsrfInterceptor";
import { AnswerComponent } from './_components/answer/answer.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import { AnswerEditComponent } from './_components/answer-edit/answer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    QuestionsComponent,
    QuestionComponent,
    ProjectComponent,
    NewprojectComponent,
    NewQuestionComponent,
    SearchPipe,
    AnswerComponent,
    AnswerEditComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		NgbModule,
		HttpClientModule,
		FormsModule,
    FontAwesomeModule,

	],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far)
  }
}
