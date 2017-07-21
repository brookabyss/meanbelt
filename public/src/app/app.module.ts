import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewComponent,
    ResultComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
