import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit { 
 
itemList:AngularFireList<any>
  itemArray=[]
  constructor(public db:AngularFireDatabase) { 
    this.itemList=db.list('info')
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y=action.payload.toJSON()
        y["$key"] = action.key
        this.itemArray.push(y as ListItemClass)
        console.log(this.itemArray)
    })
  
  })
 
  }
 
  ngOnInit() {
  }
}
export class ListItemClass{
  $key:string;
  name:string;
  phone:string;
  skill:string;
  province:string;
  price:string;
  comments:string;

}
