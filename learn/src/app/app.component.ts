import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfnumbers =[11,2,4,52,5]
  textNumber='Initial Value'
  onNumberAdd(){
    console.log("fn called",this.textNumber)
  }

  handleChange(event : any){
    console.log("changed")
    this.textNumber=event.target.value
  }
}
