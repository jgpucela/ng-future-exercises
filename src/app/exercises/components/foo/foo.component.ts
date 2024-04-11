import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {}
