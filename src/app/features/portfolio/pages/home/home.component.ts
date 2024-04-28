import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    GalleryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
