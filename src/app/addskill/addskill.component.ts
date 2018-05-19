import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {
data={
  name:'',
  phone:'',
  skill:'',
  province:'',
  price:'',
  comments:''
}
itemList:AngularFireList<any>
  constructor(public db:AngularFireDatabase,public router:Router) {
    this.itemList=db.list('info')
   }

  ngOnInit() {
  }

  insertskill(){
    this.itemList.push({
      name:this.data.name,
      phone:this.data.phone,
      skill:this.data.skill,
      province:this.data.province,
      price:this.data.price,
      comments:this.data.comments
    })
    this.router.navigate(['/Myskill'])

  }
}
