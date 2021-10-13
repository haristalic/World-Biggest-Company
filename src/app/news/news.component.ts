import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  {
// display data
topHeadingDisplay:any = [];

  constructor(private newsApi:NewsapiservicesService) {
    this.newsApi.topHeading().subscribe((data)=>{
      console.log(data);
      this.topHeadingDisplay = data.articles;
      this.topHeadingDisplay.length = 18;
    })
  }



}
