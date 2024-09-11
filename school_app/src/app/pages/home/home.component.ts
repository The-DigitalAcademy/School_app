import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared/nav/nav.component';
import { FooterComponent } from '../../UI/shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
