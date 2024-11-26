import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { FooterComponent } from './components/footer/footer.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a hero component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(
      fixture.debugElement.query(By.directive(HeroComponent))
    ).toBeTruthy();
  });

  it('should have a carousel component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(
      fixture.debugElement.query(By.directive(CarouselComponent))
    ).toBeTruthy();
  });

  it('should have a footer component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(
      fixture.debugElement.query(By.directive(FooterComponent))
    ).toBeTruthy();
  });

  it('should have a techstack component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(
      fixture.debugElement.query(By.directive(TechstackComponent))
    ).toBeTruthy();
  });
});
