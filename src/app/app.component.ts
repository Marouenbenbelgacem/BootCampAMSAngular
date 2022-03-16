import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amss';

  formateur :string ="Amine";
  bootcamp:string[]=["spring", "agile","git"];
  prix:number=450;
  ishybride:boolean=true;
}
