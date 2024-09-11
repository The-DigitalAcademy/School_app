import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared/nav/nav.component';
import { FooterComponent } from '../../UI/shared/footer/footer.component';

@Component({
  selector: 'app-archivers',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './archivers.component.html',
  styleUrl: './archivers.component.css'
})
export class ArchiversComponent {

}
