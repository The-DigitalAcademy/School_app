import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared/nav/nav.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
