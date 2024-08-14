import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  taskForm: FormGroup;
  tasks: any[] = [];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      done: [false]
      
    });
    
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.tasks.push(this.taskForm.value);
      this.taskForm.reset({
        done: false
      });
    }
  }

  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
