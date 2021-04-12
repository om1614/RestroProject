import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private restro:RestroService, private router:Router) { }

  ngOnInit(): void {
  }
   

  login(){
    if(this.email=="jeevan@gmail.com" && this.password=="12345"){
    this.router.navigate[("../LIST RESTAURANT")]
    }
    else(
      alert("please enter valide details")
    )
  }
}
