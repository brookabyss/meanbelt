import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { HttpService } from '../http.service'
import {User} from '../user'
import { Router } from '@angular/router'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test=[]
  form_status=false
  user_test={
    1:{
      correct_answer: null,
      fake1: null,
      fake2:null,
      result:"",
    },
    2:{
      correct_answer: null,
      fake1: null,
      fake2:null,
      result:"",
    },
    3:{
      correct_answer: null,
      fake1: null,
      fake2:null,
      result:"",
    }
  }
  constructor(private _httpService: HttpService) { 
    this._httpService.get_test()
    .then(test=>{
      console.log("the test is here", test)
      this.test=test
    })
    .catch(err=> console.log(err))
  }

  ngOnInit() {
  }
  submitTest(){
    let score=0
   for (let question in this.user_test){
     if (this.user_test[question]['correct_answer']==true)
      {
        score++
      }   
    }
    console.log(this.user_test)
    console.log("the test score is" ,score)
  }
  answer(i,reply): void{
    
    for (let key in this.user_test[i]){
      if(key==reply){
        this.user_test[i][key]=true
      }
      else{
         this.user_test[i][key]=null
      }
    }

  }
  buttonDisabled(){
   for (let i =0; i< 3; i++){
     for (let keys in this.user_test[i]){
       if (!this.user_test[i][keys]){
         return false;
       }
     }
   }
    this.form_status=true;
    return true
  }

}
