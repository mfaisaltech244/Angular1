import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  private messagesource = new BehaviorSubject("Hello");

  currentMessage = this.messagesource.asObservable();

  changeMessage(message:string){
    this.messagesource.next(message);
  }

  

}
