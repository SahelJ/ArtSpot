import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Array<any>>(this.url);
}

get(id: number){
    return this.http.get<any>(this.url + id);
}

// add(oeuvre: oeuvre){
//     return this.http.post(this.url, city);
// }

}
