import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared/nav/nav.component';
import { FooterComponent } from '../../UI/shared/footer/footer.component';

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './activites.component.html',
  styleUrl: './activites.component.css'
})
export class ActivitesComponent {

}
