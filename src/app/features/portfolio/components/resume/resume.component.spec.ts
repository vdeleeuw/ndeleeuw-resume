import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Mon CV');
  });

  it('should render title experience', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title__experience')?.textContent).toContain(
      'Expériences'
    );
  });

  it('should render title formation', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title__formation')?.textContent).toContain(
      'Formations'
    );
  });
});
