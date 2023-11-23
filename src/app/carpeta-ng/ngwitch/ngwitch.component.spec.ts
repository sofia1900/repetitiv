import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgwitchComponent } from './ngwitch.component';

describe('NgwitchComponent', () => {
  let component: NgwitchComponent;
  let fixture: ComponentFixture<NgwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
