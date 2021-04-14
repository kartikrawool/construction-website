import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { ApiService } from './service/api.service';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { ServiceComponent } from './components/site/service/service.component';
import { ProjectComponent } from './components/site/project/project.component';
import { SingleProjectComponent } from './components/site/single-project/single-project.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { LoginComponent } from './components/site/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioCreateComponent,
    PortfolioEditComponent,
    PortfolioListComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProjectComponent,
    SingleProjectComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
