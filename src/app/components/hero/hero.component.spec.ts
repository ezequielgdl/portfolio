import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { UpperCasePipe } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name in uppercase', () => {
    expect(fixture.nativeElement.textContent).toContain('EZEQUIEL');
    expect(fixture.nativeElement.textContent).toContain('GÓMEZ DE LIMA');
  });

  it('should use UpperCasePipe', () => {
    const pipe = new UpperCasePipe();
    expect(pipe.transform('ezequiel')).toBe('EZEQUIEL');
    expect(pipe.transform('gómez de lima')).toBe('GÓMEZ DE LIMA');
    expect(pipe.transform('frontend web developer')).toBe(
      'FRONTEND WEB DEVELOPER'
    );
  });

  it('should have UpperCasePipe applied to text elements', () => {
    const elements = fixture.debugElement.queryAll(By.css('h1, p'));
    elements.forEach((el) => {
      expect(el.nativeElement.textContent.trim()).toBe(
        el.nativeElement.textContent.trim().toUpperCase()
      );
    });
  });
});
