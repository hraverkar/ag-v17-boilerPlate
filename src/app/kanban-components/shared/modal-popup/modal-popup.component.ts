import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.scss',
})
export class ModalPopupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: any
  ) {}

  public myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
    });
  }

  public closeModel() {
    this.dialogRef.close();
  }

  public onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.dialogRef.close(formData);
      console.log('Form data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}
