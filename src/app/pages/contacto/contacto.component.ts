import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    asunto: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
