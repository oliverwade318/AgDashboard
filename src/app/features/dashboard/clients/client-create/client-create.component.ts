import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormGroup({
      cep: new FormControl(''),
      state: new FormControl('DF', [Validators.required]),
      city: new FormControl('Brasília', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.min(1)]),
      complement: new FormControl('')
    }),
    birthday: new FormControl(''),
    dependents: new FormArray([]),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  save(){

  }
}
