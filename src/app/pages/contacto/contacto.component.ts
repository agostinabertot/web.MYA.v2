import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/netlify-forms/netlify-forms.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.netlifyForms.submitContact(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset();
        this.router.navigateByUrl('/success');
      }
    );
  }

}
