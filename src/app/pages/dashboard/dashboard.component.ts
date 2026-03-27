import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  message:any;
  constructor(private dataServieces:DataService){
    this.dataServieces.currentMessage.subscribe(msg =>{this.message = msg})
  }



}
