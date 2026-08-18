import { Component } from '@angular/core';
import { Parent } from './features/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [Parent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}