import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { AddEventPageComponent } from '../event-page/components/add-event-page/add-event-page.component';
import { EditEventPageComponent } from '../event-page/components/edit-event-page/edit-event-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'add-event',
    component: AddEventPageComponent,
  },
  {
    path: 'edit-event',
    component: EditEventPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
