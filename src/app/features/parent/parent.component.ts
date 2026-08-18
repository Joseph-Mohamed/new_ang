import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter.component';

@Component({
  selector: 'app-parent',
  imports: [Counter],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class Parent {
  count = signal(1);
}