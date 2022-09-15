import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagesComponent } from './mensages.component';

describe('MensagesComponent', () => {
  let component: MensagesComponent;
  let fixture: ComponentFixture<MensagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
