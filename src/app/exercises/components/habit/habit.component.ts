import { Component, input } from '@angular/core'

@Component({
  selector: 'app-habit',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitComponent {
  title = 'hello world'

  method() {
    return this.title + 1
  }
  update() {
    this.title = 'New title'
  }

  name = input<string>('Unknown')
}
