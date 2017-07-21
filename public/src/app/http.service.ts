import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {
  observedUser=new BehaviorSubject(null)

  constructor(private _http: Http) { }
  updateUser(user){
    this.observedUser.next(user)
  }
  addUser(user){
    console.log(user," from service")
    return this._http.post('/users/add',user).map(data=> data.json()).toPromise()
  }
  addQuestion(question){
    console.log("the question in service")
    return this._http.post('/questions/new',question).map(data=> data.json()).toPromise()
  }
  get_logged_in_user(){
    return this._http.get('/get_logged_in_user').map(data=> data.json()).toPromise()
  }
  get_test(){
    return this._http.get('/get_test').map(data=> data.json()).toPromise()
  }

}
