import { Component } from '@angular/core';
import { H2TitleComponent } from '@shared/components/h2-title/h2-title.component';

@Component({
  selector: 'app-portfolio-resume',
  standalone: true,
  imports: [H2TitleComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
