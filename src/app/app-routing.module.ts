import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { HomeComponent } from './components/site/home/home.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import { ProjectComponent } from './components/site/project/project.component';
import { ServiceComponent } from './components/site/service/service.component';
import { SingleProjectComponent } from './components/site/single-project/single-project.component';
import { MessageListComponent } from './components/message-list/message-list.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'admin', pathMatch: 'full', redirectTo: 'login' },
  { path: 'create-portfolio', component: PortfolioCreateComponent },
  { path: 'edit-portfolio/:id', component: PortfolioEditComponent },
  { path: 'portfolio-list', component: PortfolioListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'single-project/:id', component: SingleProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'message-list', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
