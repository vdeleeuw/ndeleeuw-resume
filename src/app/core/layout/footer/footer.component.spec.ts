import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render github', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.footer__link') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.href).toContain('https://github.com/vdeleeuw');
    expect(link.textContent).toContain('vdeleeuw');
  });
});
