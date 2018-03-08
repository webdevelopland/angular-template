// ---------------------- Unit Test ----------------------
import { TestBed, ComponentFixture } from '@angular/core/testing';

// ---------------------- Angular ----------------------
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ---------------------- Components ----------------------
import { MyComponent } from './my-component.component';

// ---------------------- Test ----------------------
describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
