import { TestBed, async } from '@angular/core/testing';
import { HomePageComponent } from './home.component';

describe("HomePageComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent
      ]
    }).compileComponents();
  });
  it("should be created", () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
