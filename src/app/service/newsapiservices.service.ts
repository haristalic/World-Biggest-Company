import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) {}
    //newsapiurl 58976b3c6932436f9067478c9a60d5a9
    newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=58976b3c6932436f9067478c9a60d5a9";

    //topHeading
    topHeading():Observable<any>{
      return this.http.get(this.newsApiUrl);
   }
}
