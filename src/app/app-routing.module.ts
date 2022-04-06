import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PrintComponent } from './print/print.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'print', component: PrintComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
