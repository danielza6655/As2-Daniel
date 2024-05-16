import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,]
})
export class DemographicComponent {
  demographicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demographicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.demographicForm.valid) {
      console.log('Form Submitted', this.demographicForm.value);
    }
  }
}
