import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.show();
  }
  title = 'Local-Storage';

   name = "";
  email = "";
  Password = "";
  persondata:any[]=[];
  result:any;
  subData(){
    let person={
      name:this.name,
      email:this.email,
      password:this.Password
    }
    this.persondata.push(person);

    this.name = "";
    this.email = "";
    this.Password = "";


    localStorage.setItem("data",JSON.stringify(this.persondata))


    this.show();
  }

  show(){
    this.result = JSON.parse(localStorage.getItem("data") || '[]')
    console.log(this.result);


  }
}
