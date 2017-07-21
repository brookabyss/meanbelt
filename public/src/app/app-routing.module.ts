import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { NewComponent } from './new/new.component'
import { LoginComponent } from './login/login.component'
const routes: Routes = [
  {
    path: 'lets_play',
    component: TestComponent
  },
  {
    path: 'new_question',
    component: NewComponent
  },
   {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
