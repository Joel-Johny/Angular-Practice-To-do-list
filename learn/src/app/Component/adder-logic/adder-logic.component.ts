import { Component } from '@angular/core';

@Component({
  selector: 'app-adder-logic',
  templateUrl: './adder-logic.component.html',
  styleUrls: ['./adder-logic.component.css']
})
export class AdderLogicComponent {

  a=2;
  b="some text"
  handleClick(){
    console.log(this)
  }
}
