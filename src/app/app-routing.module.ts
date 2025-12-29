import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessLevelComponent } from './components/access-level/access-level.component';

const routes: Routes = [
  { path: '', redirectTo: '/access-levels', pathMatch: 'full' },
  { path: 'access-levels', component: AccessLevelComponent },
  { path: '**', redirectTo: '/access-levels' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }