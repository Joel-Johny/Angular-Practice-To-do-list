import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersListService {

  constructor() { }

  numbersList = [1,2,3,4,5,6]

  getNumbers() : any[]{
    return this.numbersList
  }
}
