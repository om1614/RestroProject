import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestroService } from '../restro.service';
@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  alert:boolean=false

  editRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private restro:RestroService , private router:ActivatedRoute ) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.restro.getcurrentRestro(this.router.snapshot.params.id).subscribe(
      (result)=>{
        this.editRestro = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        })

      }
     
    )
      
  }
    
collection(){
 // console.warn(this.editRestro.value)
  this.alert=true
  this.restro.UpdateRestro(this.router.snapshot.params.id,this.editRestro.value).subscribe(
    (result)=>{
      console.warn(result)
    }
    
  )
}

closeAlert(){
this.alert=false
}
}


