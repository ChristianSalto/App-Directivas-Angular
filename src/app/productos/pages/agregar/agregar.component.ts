import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  msjError1: string = 'Christian Salto Perez';
  color:string = 'red'

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  isError(value: string): boolean {
    return this.myForm.get('name')?.invalid || false;
  }

  setMsjError(): void {
    this.msjError1 = Math.random().toString();
  }

  setColor():void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color
  }
}
