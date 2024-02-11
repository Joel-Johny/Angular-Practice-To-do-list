import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.listOfnumbers = params['listOfnumbers'].split(',');
      console.log(this.listOfnumbers)
    });
  }

  // @Input() list3 : any;
  listOfnumbers :any=[]
  someString="Hemlo WOrld"
  object = {key1:1,key2:2,key3:4}
}
