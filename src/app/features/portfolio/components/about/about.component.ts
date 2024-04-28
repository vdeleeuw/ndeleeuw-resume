import { Component } from '@angular/core';
import { H2TitleComponent } from '@shared/components/h2-title/h2-title.component';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [H2TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
