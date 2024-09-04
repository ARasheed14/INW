import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurServicesPage } from './our-services.page';

describe('OurServicesPage', () => {
  let component: OurServicesPage;
  let fixture: ComponentFixture<OurServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
