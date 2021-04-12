import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false
  Register= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private restro:RestroService) { }

  ngOnInit(): void {
  }

  Collectuser(){
   // console.warn( this.Register.value)
    this.restro.registerUser(this.Register.value).subscribe(
      (result)=>{console.log("result",result)
      this.alert=true
    }
      
    )
    
     }

     closeAlert(){
       this.alert=false
     }
}
