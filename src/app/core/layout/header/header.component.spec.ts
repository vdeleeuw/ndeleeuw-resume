import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const image = compiled.querySelector('img') as HTMLImageElement;
    expect(image).toBeTruthy();
    expect(image.src).toContain('logo.png');
    expect(image.alt).toEqual('Nathalie de Leeuw');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title__text')?.textContent).toContain(
      'Nathalie'
    );
  });
});
