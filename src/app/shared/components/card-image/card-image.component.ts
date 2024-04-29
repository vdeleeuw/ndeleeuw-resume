import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.css',
})
export class CardImageComponent implements OnInit {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input() legend!: string;

  isFullScreen: boolean = false;

  ngOnInit(): void {
    this.legend = this.legend ? this.legend : this.alt;
  }

  openImg(): void {
    this.isFullScreen = true;
  }

  closeImg(): void {
    this.isFullScreen = false;
  }
}
