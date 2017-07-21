import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Question } from '../question'
import { Subscription } from "rxjs/Subscription";
import { HttpService } from '../http.service'
import {User} from '../user'
import { Router } from '@angular/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnDestroy {
  question= new Question
  subscription : Subscription
  user=new User
  error_message: String;
  constructor(private _httpService: HttpService, private _router: Router) {
    this._httpService.get_logged_in_user()
    .then(user=>{
      if(user){
        
        this.user=user
        console.log("The user with the id is theis man", user.name)
      }
      else{
        // this._router.navigate([''])
      }
      
    })
    .catch(err=> console.log(err))
    
    this.subscription=this._httpService.observedUser.subscribe(
      user=> this.user=user,
      err=> console.log(err),
      ()=>{}
    )
    console.log("the logged in users id is ",this.user)
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.question)
    console.log("the logged in users id is ",this.user._id)
    this.question._creator=this.user._id
    this._httpService.addQuestion(this.question)
    .then(
      data=> {
        console.log( "Was the question created?" ,data)
        if (data){
          this._router.navigate([''])
        }
        else{
          this.error_message=" The form was not created , please referesh the page and try agian"
          this._router.navigate(['/new_question'])
        }
      }
    )
    .catch(err=>console.log(err))

  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  goHome(){
    this._router.navigate([''])
  }
}
