import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { HttpService } from '../http.service'
import {User} from '../user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  user=new User
  subscription: Subscription
  constructor(private _httpService: HttpService) {
    if(!this.user.name){
      this.user.name=prompt("Name please?")
      console.log(this.user)
    }
    this._httpService.addUser(this.user)
    .then(data=> console.log("user created", data))
    .catch(err=> console.log(err))
    this._httpService.updateUser(this.user)
   this.subscription =this._httpService.observedUser.subscribe(
      user=> this.user=user,
      err=> console.log(err),
      ()=>{}
    )
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  

}
