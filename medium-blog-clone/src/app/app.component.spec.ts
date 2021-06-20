import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    //compileComponents is not necessary while using the web pack
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'medium-blog-clone'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('medium-blog-clone');
  });

  // it('should render title', () => {
  // const fixture = TestBed.createComponent(AppComponent);

  // fixture.detectChanges();
  // const compiled = fixture.nativeElement;
  // expect(compiled.querySelector('.content span').textContent).toContain('medium-blog-clone app is running!');
  // });
});
