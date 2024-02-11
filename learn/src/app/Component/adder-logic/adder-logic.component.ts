import { Component,Input } from '@angular/core';
import { NumbersListService } from '../../numbers-list.service';
@Component({
  selector: 'app-adder-logic',
  templateUrl: './adder-logic.component.html',
  styleUrls: ['./adder-logic.component.css']
})
export class AdderLogicComponent {
 
  // @Input() list3 : any;
  textNumber :any=''
  listOfnumbers :any=[]

  constructor(private numberlistService:NumbersListService){}

  ngOnInit(){
    this.listOfnumbers=this.numberlistService.getNumbers()
  }
  handleClick(){
    console.log("fn called current value of thisnno.",this.textNumber)
    // this.listOfnumbers[this.listOfnumbers.length]=this.textNumber
    this.listOfnumbers=[...this.listOfnumbers,this.textNumber]
    // this.normalNo=this.textNumber
    console.log(this.listOfnumbers)
    this.textNumber=''  
  }
}
