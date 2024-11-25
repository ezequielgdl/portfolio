import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  host: {
    class:
      'flex flex-col items-center md:items-start justify-center h-screen px-10 w-full md:w-1/3 motion-opacity-in-[0%] motion-duration-[0.00s] motion-duration-[3s]/opacity cursor-default',
  },
  imports: [UpperCasePipe, IconsComponent],
  template: `
    <h1 class="text-olive-green text-5xl font-apercu font-medium">
      {{ 'ezequiel' | uppercase }}
    </h1>
    <h1 class="text-olive-green text-5xl font-apercu font-medium ">
      {{ 'gómez de lima' | uppercase }}
    </h1>
    <p class="text-olive-green text-2xl font-apercu-mono py-2">
      {{ 'frontend web developer' | uppercase }}
    </p>
    <app-icons />
  `,
})
export class HeroComponent {}
