import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgZone } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, BrowserDynamicTestingModule, CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preload current and next video after view init', () => {
    expect(component.loadedVideos.size).toBe(2);
    expect(component.loadedVideos.has(0)).toBeTrue();
    expect(component.loadedVideos.has(1)).toBeTrue();
  });

  it('should load next video and wrap around correctly', () => {
    component.currentIndex = component.projects.length - 1;
    component.nextSlide();
    fixture.detectChanges();

    expect(component.currentIndex).toBe(0);
    expect(component.loadedVideos.has(1)).toBeTrue();
  });

  it('should load previous video and wrap around correctly', () => {
    component.prevSlide();
    fixture.detectChanges();

    expect(component.currentIndex).toBe(component.projects.length - 1);
    expect(
      component.loadedVideos.has(component.projects.length - 2)
    ).toBeTrue();
  });

  it('should move to the next slide when next button is clicked', () => {
    const nextButton = fixture.debugElement.query(
      By.css('[data-testid="next-button"]')
    );
    nextButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.currentIndex).toBe(1);
  });

  it('should move to the previous slide when previous button is clicked', () => {
    component.currentIndex = 1;
    fixture.detectChanges();
    const prevButton = fixture.debugElement.query(
      By.css('[data-testid="prev-button"]')
    );
    prevButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.currentIndex).toBe(0);
  });

  it('should handle ArrowDown keydown event', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.currentIndex).toBe(1);
  });

  it('should handle ArrowUp keydown event', () => {
    component.currentIndex = 1;
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.currentIndex).toBe(0);
  });

  it('should not react to other keyboard events', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.currentIndex).toBe(0);
  });

  it('should not reload already loaded videos', () => {
    component.loadVideo(0);
    const initialSize = component.loadedVideos.size;
    component.loadVideo(0);
    expect(component.loadedVideos.size).toBe(initialSize);
  });
});
