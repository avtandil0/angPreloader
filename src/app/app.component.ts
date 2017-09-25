import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLoading: boolean = true;
  ngOnInit(){
    console.log(this.isLoading);
    setTimeout(() => { 
      this.isLoading = false; 
      console.log(this.isLoading); 
    }, 3000);
  }
}

