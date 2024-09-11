import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared/nav/nav.component';
import { FooterComponent } from '../../UI/shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
