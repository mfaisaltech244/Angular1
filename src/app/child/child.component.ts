import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() userName:any;
  @Output() messageEvent = new EventEmitter();

  sendMessage(){
    this.messageEvent.emit("Hello from Child");
  }

}
