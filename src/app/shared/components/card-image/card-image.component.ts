import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.css',
})
export class CardImageComponent {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;

  isFullScreen: boolean = false;

  openImg(): void {
    this.isFullScreen = true;
  }

  closeImg(): void {
    this.isFullScreen = false;
  }
}
