import { Component } from '@angular/core';
import { H2TitleComponent } from '@shared/components/h2-title/h2-title.component';
import { CardImageComponent } from '@shared/components/card-image/card-image.component';

@Component({
  selector: 'app-portfolio-gallery',
  standalone: true,
  imports: [H2TitleComponent, CardImageComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {}
