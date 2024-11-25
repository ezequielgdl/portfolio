import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  host: {
    class:
      'w-full md:w-2/3 h-screen flex flex-col items-center justify-around cursor-default',
  },
  template: `
    <section
      class="relative h-3/4 md:h-1/3 lg:h-2/3 w-full px-6 rounded-xl motion-opacity-in-[0%] motion-duration-[0.00s] motion-duration-[3s]/opacity"
    >
      @defer {
      <div class="absolute -top-12 right-8 flex gap-4">
        <button
          (click)="prevSlide()"
          class="p-1 rounded-full bg-olive-green hover:bg-olive-green-dark transition-colors focus:outline-olive-green-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f8f8f8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          (click)="nextSlide()"
          class="p-1 rounded-full bg-olive-green hover:bg-olive-green-dark transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f8f8f8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Carousel Container -->
      <div class="relative w-full h-full overflow-hidden">
        @for (project of projects; track project.title; let i = $index) {
        <div
          class="absolute w-full h-full aspect-video flex items-center justify-center transition-transform duration-700 ease-in-out rounded-xl bg-olive-green text-white-cream"
          [style.transform]="'translateY(' + 100 * (i - currentIndex) + '%)'"
        >
          <video
            [src]="project.video"
            class="w-full h-full rounded-xl px-6"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <div
            class="absolute inset-0 bg-olive-green/95 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-12 text-center rounded-xl"
          >
            <h2 class="text-3xl font-medium mb-4">{{ project.title }}</h2>
            <p class="text-md md:text-lg mb-6">{{ project.description }}</p>
            <div class="flex gap-4">
              <a
                *ngIf="project.url"
                [href]="project.url"
                target="_blank"
                class="px-4 py-2 bg-white-cream text-olive-green rounded hover:bg-opacity-90 transition-colors"
              >
                Visit Site
              </a>
              <a
                *ngIf="project.github"
                [href]="project.github"
                target="_blank"
                class="px-4 py-2 bg-white-cream text-olive-green rounded hover:bg-opacity-90 transition-colors"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        }
      </div>
      } @placeholder (minimum 1s) {
      <div class="w-full h-full bg-olive-green rounded-xl"></div>
      }
    </section>
  `,
})
export class CarouselComponent {
  currentIndex = 0;

  projects = [
    {
      id: 1,
      title: 'Tempo',
      description:
        'Tempo is an assistant designed to help freelancers manage clients and generate invoices with insightful analytics. Built using Angular, Tailwind CSS, Supabase, and Chart.js, Tempo provides a modern and responsive interface for efficient client management.',
      video: '/media/tempo.webm',
      url: 'https://tempo-freelance.vercel.app',
      github: 'https://github.com/ezequielgdl/tempo-spartan',
    },
    {
      id: 2,
      title: 'International Women´s Forum Argentina',
      description:
        'Developed and designed in 2024 using Angular and Supabase. With a personal dashboard for the client to dynamically change the content of the website (events, activities and milestones)',
      video: '/media/iwf.webm',
      url: 'https://iwforum.vercel.app',
    },
    {
      id: 3,
      title: 'Circclo',
      description:
        'Worked as a frontend developer for Circclo from 2022-2024. Circclo is a startup that provides technology for the end of single-use plastic containers.',
      video: '/media/circclo.webm',
      url: 'https://circclo.com',
    },
    {
      id: 4,
      title: 'Parrillometro',
      description:
        'Parrillometro is a web app that allows you to calculate the amount of meat you need to cook based on the number of people with insights about your BBQs and the quantities.',
      video: '/media/parrillometro.webm',
      github: 'https://github.com/ezequielgdl/calculadora-de-asado',
      url: 'https://calculadora-de-asado.vercel.app',
    },
    {
      id: 5,
      title: 'TouristTrapp - Turisme Sostenible',
      description:
        'TouristTrapp is a web app I participated in, developed by a hackathon team consisting of data analysts, backend developers and frontend developers. Using Barcelona´s Open Data, the app allows users to find tourist attractions contrasted with the amount of tourist concentration and noise level in the area.',
      video: '/media/touristtrapp.webm',
      url: 'https://solo-frontend-turisme.vercel.app',
    },
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') this.nextSlide();
    if (event.key === 'ArrowUp') this.prevSlide();
  }
}
