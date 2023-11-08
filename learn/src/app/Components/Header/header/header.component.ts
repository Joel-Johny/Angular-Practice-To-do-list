import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() "prop1": string;


  toggleAddtask(){
    console.log("toggle task")
  }
} 
