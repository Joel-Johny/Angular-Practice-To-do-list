import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  listOfnumbers =[11,2,4,52,5]
  // normalNo='0'
  textNumber :any=''
  onNumberAdd(){
    console.log("fn called current value of thisnno.",this.textNumber)
    // this.listOfnumbers[this.listOfnumbers.length]=this.textNumber
    this.listOfnumbers.push(this.textNumber)
    // this.normalNo=this.textNumber
    console.log(this.listOfnumbers)
    this.textNumber=''
    
  }

  handleChange(event : any){
    console.log("changed")
    // this.textNumber=event.target.value
  }
}
