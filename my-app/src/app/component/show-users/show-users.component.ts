import { Component, OnInit } from '@angular/core';
import { MyappService } from '../../services/myapp.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  USERS=[];
  constructor(private myappservice:MyappService) { }

  ngOnInit(){
    this.myappservice.findAllUsers().subscribe(data=>{
      console.log(data);
      if (data.success){
        for(let index = 0; index < data.users.length; index++) {
          this.USERS.push(data.users[index]);
        //  console.log(this.USERS);
        //this.USERS.push(JSON.stringify(data.users));
      }
    }
    });
  }

}
