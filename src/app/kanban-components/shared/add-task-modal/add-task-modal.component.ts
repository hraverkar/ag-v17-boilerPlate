import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ITaskStatusResponse } from '../../../interfaces/itask-status-response';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss',
})
export class AddTaskModalComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DialogRef<ITaskStatusResponse>,
    @Inject(DIALOG_DATA) public data: ITaskStatusResponse[]
  ) {}

  selectFormControl = new FormControl('', Validators.required);
  taskStatusControl = new FormControl<ITaskStatusResponse | null>(
    null,
    Validators.required
  );

  public myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
      taskDetail: ['', Validators.required],
    });
  }

  public closeModel() {
    this.dialogRef.close();
  }

  public onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      formData.taskStatusId = this.taskStatusControl.value;
      this.dialogRef.close(formData);
      console.log('Form data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}
