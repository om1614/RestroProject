import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RestroService {
url = "http://localhost:3000/restaurants"
 rooturl = "http://localhost:3000/"
  alert: boolean;
  constructor(private http:HttpClient) { }
  getlist(){
   return this.http.get(this.url)
  }

  SaveRestro( data){
    //console.warn("service",data)
   return this.http.post(this.url,data)
  };

  DeleteRestro(id){
   return this.http.delete(`${this.url}/${id}`)
  };

 getcurrentRestro(id){
    return this.http.get(`${this.url}/${id}`)
 };

 UpdateRestro(id,data){
  return this.http.put(`${this.url}/${id}`,data)
};

registerUser(data){
 return this.http.post(this.rooturl + "users",data)
}
 
}

