import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { InternshipdetailsComponent } from '../internshipdetails/internshipdetails.component';
import { IntershipListComponent } from '../intership-list/intership-list.component';
import { CategoryComponent } from '../category/category.component';
import { ErrorComponent } from '../error/error.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { PostComponent } from '../post/post.component';
import { ProfileComponent } from '../profile/profile.component';
import { CompanyProfileComponent } from '../company-profile/company-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'intershipdetails',
    component: InternshipdetailsComponent,
  },
  {
    path: 'list',
    component: IntershipListComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'companyprofile/post',
    component: PostComponent,
  },
  {
    path: 'setting',
    component: ProfileComponent,
  },
  {
    path: 'companyprofile',
    component: CompanyProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
