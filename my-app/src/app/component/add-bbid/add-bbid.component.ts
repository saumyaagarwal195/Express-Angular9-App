import { Component, OnInit } from '@angular/core';
import { MyappService } from '../../services/myapp.service';

@Component({
  selector: 'app-add-bbid',
  templateUrl: './add-bbid.component.html',
  styleUrls: ['./add-bbid.component.css']
})
export class AddBbidComponent implements OnInit {
  BBID=[];
  BBid:String;
  show="";
  success="";
  
  constructor(private myappservice:MyappService) { }

  ngOnInit() {
  }

  showbbid(){
  this.myappservice.findAllBBid().subscribe(data=>{
    console.log( "My Data" +typeof(data));
     if (data.success){
       for(let index = 0; index < data.BBid.length; index++) {
        this.BBID.push(data.BBid[index]);
        console.log(this.BBID);
       }
    }
  });
  }
  addBBid(){
    let bbid ={
      BBid:this.BBid
    };
    this.myappservice.addBBid(bbid).subscribe(data=>{
      this.show=data.msg;
    });
    console.log("It comes to add-bbid.component.ts");
    this.BBid="";
  }


}
