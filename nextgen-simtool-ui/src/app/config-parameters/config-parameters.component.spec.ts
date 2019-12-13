import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigParametersComponent } from './config-parameters.component';

describe('ConfigParametersComponent', () => {
  let component: ConfigParametersComponent;
  let fixture: ComponentFixture<ConfigParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
