import { Component } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
 