import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/estudiante/list/list.component';
import { VerComponent } from './components/estudiante/ver/ver.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'ver', component: VerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
