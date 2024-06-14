import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSidenavComponent } from './container-sidenav.component';

describe('ContainerSidenavComponent', () => {
  let component: ContainerSidenavComponent;
  let fixture: ComponentFixture<ContainerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
