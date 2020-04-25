import { Component, OnInit } from '@angular/core';
import { MyappService } from '../../services/myapp.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email:String;
  username:String;
  password:String;
  BBid:String;
  Susername:String;
  Spassword:String;
  success:boolean;
  //msg:String;
  formdata;
  show="";
  Sshow="";

  constructor(private myappservice:MyappService) { }
  ngOnInit(): void {
  }
  addusers(){
    let user ={
      email:this.email,
      username:this.username,
      password:this.password,
      BBid:this.BBid
    };
    console.log("user:- "+user);
    this.myappservice.adduser(user).subscribe(data=>{
      this.show=data.msg;
    });
    // let userOne={
    //   username:this.username
    // };
//    console.log("userOne:- "+userOne);
    /* this.myappservice.addUserOnDev(userOne).subscribe(data=>{
      //this.show=data.msg;
    }); */
    // console.log(this.email);
    this.email="";
    this.username="";
    this.password="";
    this.BBid="";
  }

  signin(){
    let user ={
      username:this.Susername,
      password:this.Spassword
    };
    //console.log(user.username);
    //console.log(user.password);
    this.myappservice.signin(user).subscribe(data=>{
      this.Sshow=data.msg;
    });
    // this.Susername="";
    // this.Spassword="";
    console.log(this.Sshow);
    // if(this.success==true){    
    //   this.Router.navigate(['/userdata']);
    // }

  }

}
