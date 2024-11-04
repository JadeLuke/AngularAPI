import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // public info: any;
  // public data: any;
  public items: any[] = [];
  textClass = ['text', 'font'];
  // itemImageUrl = 'https://cdn.discordapp.com/attachments/1230099060661157949/1286651048848523354/yoni.jpeg?ex=66fe80aa&is=66fd2f2a&hm=9342597dd9ebd484bf17a0704e4c798c9ad34add219bb4dc4299baee4df3a5a9&';
  constructor(private http: HttpClient){}

  title = 'project';

  ngOnInit(): void {
    this.fetchDetails()
    // this.fetchAPI()
  }


public fetchDetails() {
  this.http.get<any[ ]>('https://restcountries.com/v3.1/all').subscribe((resp:any)=>{
  console.log(resp)
  this.items  = resp as any[];
  //    this.http.get('https://fakestoreapi.com/products').subscribe((resp: any)=>{
// console.log(resp);
// this.data = resp
// })
})
//    this.http.get('https://fakestoreapi.com/products').subscribe((resp: any)=>{
// console.log(resp);
// this.data = resp
// })
}
}
// public fetchAPI(){
//   this.http.get('https://fakestoreapi.com/products/1').subscribe((resp: any)=>{
// console.log(resp);
// this.data = resp
// })}


