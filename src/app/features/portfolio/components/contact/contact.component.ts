import { Component } from '@angular/core';
import { H2TitleComponent } from '@shared/components/h2-title/h2-title.component';

@Component({
  selector: 'app-porftolio-contact',
  standalone: true,
  imports: [H2TitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
