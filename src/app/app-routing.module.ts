import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { AnalyticsComponent } from './shared/pages/analytics/analytics.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'dasboard'
  },
  {
    path: 'dashboard',
    component:GraficasComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
