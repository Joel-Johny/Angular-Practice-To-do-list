import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  listOfnumbers =[1,2,5]
  textNumber :any=''
  onNumberAdd(){
    console.log("fn called current value of thisnno.",this.textNumber)
    // this.listOfnumbers[this.listOfnumbers.length]=this.textNumber
    this.listOfnumbers=[...this.listOfnumbers,this.textNumber]
    // this.normalNo=this.textNumber
    console.log(this.listOfnumbers)
    this.textNumber=''
    
  }

  handleCusEvt(data : any){
    console.log("data received from child appending to list",data)
    this.listOfnumbers=[...this.listOfnumbers,data]

  }
  

  // if we are not using ngModel and using [value] we have to use onchange event similar to react
  handleChange(event : any){
    console.log("changed")
    // this.textNumber=event.target.value
  }
}
