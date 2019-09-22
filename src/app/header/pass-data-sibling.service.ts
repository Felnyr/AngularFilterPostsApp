import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PassDataSiblingService {
  private input = new BehaviorSubject("Default Message");
  currentMessage = this.input.asObservable();
  constructor() { }

  changeMessage(message: string){
    this.input.next(message);
  }

  filterMethod(dataArr, input){
    console.log(dataArr)
    return dataArr = dataArr.filter((x) => {
      return x.id === input;
    });
    console.log(dataArr)
  }
}
