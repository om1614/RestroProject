import { Component, OnInit } from '@angular/core';

import { RestroService } from '../restro.service';


@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {
 

  constructor(private restro:RestroService) { }
  collection:any=[]

  ngOnInit(): void { 
    this.restro.getlist().subscribe(
      (rec)=>{
        console.log(rec);
        this.collection=rec
      },
      ()=>{}

    )
  }

  removefrestro(answer){
    this.collection.splice(answer-1,1)
    this.restro.DeleteRestro(answer).subscribe(
      (result)=>{console.warn("result",result)}
    )
  }
  
  
}
