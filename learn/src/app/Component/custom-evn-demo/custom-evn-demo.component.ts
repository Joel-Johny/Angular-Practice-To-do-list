import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-evn-demo',
  // standalone: true,
  // imports: [],
  templateUrl: './custom-evn-demo.component.html',
  styleUrl: './custom-evn-demo.component.css'
})
export class CustomEvnDemoComponent {

  textNumber :any=''
  @Output() evnEmit = new EventEmitter<any>();

  handleClick(){
    console.log("fn called current value of thisnno. sending it to parent via emit custom event",this.textNumber)
    this.evnEmit.emit(this.textNumber)
  }

}



  
