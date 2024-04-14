import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTaskDetailsComponent } from './kanban-task-details.component';

describe('KanbanTaskDetailsComponent', () => {
  let component: KanbanTaskDetailsComponent;
  let fixture: ComponentFixture<KanbanTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanTaskDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
