import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevicecoService {

  constructor(private http:HttpClient) { }


   postemp(data : any){

    return this.http.post<any>(" http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{ return res  }))
   }

   getemp(){

    return this.http.get<any>(" http://localhost:3000/posts")
    .pipe(map((res:any)=>{ return res  }))
   }


   upemp(data : any ,id : number){

    return this.http.put<any>(" http://localhost:3000/posts/"+ id,data)
    .pipe(map((res:any)=>{ return res  }))
   }

   deletemp(id: number){

    return this.http.delete<any>(" http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{ return res  }))
   }

}
