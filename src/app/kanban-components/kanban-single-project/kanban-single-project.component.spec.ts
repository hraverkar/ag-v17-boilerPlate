import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSingleProjectComponent } from './kanban-single-project.component';

describe('KanbanSingleProjectComponent', () => {
  let component: KanbanSingleProjectComponent;
  let fixture: ComponentFixture<KanbanSingleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanSingleProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanSingleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
