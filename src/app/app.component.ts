import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechstackComponent } from './components/techstack/techstack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  host: {
    class: 'flex flex-col md:flex-row',
  },
  imports: [
    HeroComponent,
    CarouselComponent,
    FooterComponent,
    TechstackComponent,
  ],
  template: `
    <app-hero />
    <app-carousel />
    <app-footer />
    <app-techstack />
  `,
})
export class AppComponent {}
