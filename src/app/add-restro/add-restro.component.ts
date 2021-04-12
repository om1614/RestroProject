import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
  alert:boolean=false
  addRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private restro:RestroService) { }

  ngOnInit(): void {
  }

  CollectRestro(){
 //console.warn( this.addRestro.value)
 this.restro.SaveRestro(this.addRestro.value).subscribe(
   (result)=>{
    this.alert=true;
    this.addRestro.reset({});
   }
 )
 
  }
   
   closeAlert(){
     this.alert=false
   }

}
