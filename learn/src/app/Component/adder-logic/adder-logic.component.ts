import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adder-logic',
  templateUrl: './adder-logic.component.html',
  styleUrls: ['./adder-logic.component.css']
})
export class AdderLogicComponent {

  @Input() list3 : any;
  textNumber :any=''

  handleClick(){
    console.log("fn called current value of thisnno.",this.textNumber)
    // this.listOfnumbers[this.listOfnumbers.length]=this.textNumber
    this.list3.push(this.textNumber)
    // this.normalNo=this.textNumber
    console.log(this.list3)
    this.textNumber=''  
  }
}
