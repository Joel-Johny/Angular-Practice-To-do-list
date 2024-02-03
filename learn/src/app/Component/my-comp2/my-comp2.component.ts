import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-my-comp2',
  templateUrl: './my-comp2.component.html',
  styleUrls: ['./my-comp2.component.css']
})
export class MyComp2Component {

  // @Input() "title1":string
  @Input() string1: any;
  @Input() string2: any;
  @Input() list3: any;
  @Input() normalNo: any;
  
  object = {key1:1,key2:2,key3:4}
}
