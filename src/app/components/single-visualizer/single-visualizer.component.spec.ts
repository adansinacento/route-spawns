import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVisualizerComponent } from './single-visualizer.component';

describe('SingleVisualizerComponent', () => {
  let component: SingleVisualizerComponent;
  let fixture: ComponentFixture<SingleVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
