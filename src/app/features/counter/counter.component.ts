import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class Counter {
  count = model(0);

  increaseCount() {
    this.count.update(v => v + 1);
  }
}