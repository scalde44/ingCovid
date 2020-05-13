import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';
@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {
  comunas:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  sinto:any[]=["Fiebre","Tos seca","Cansancio","Dificual para respirar","Obstruccion nasal","Dolor de cabeza"];
  createFormGroup() {
    return new FormGroup(
      {
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        cedula: new FormControl(''),
        edad: new FormControl(''),
        direccion: new FormControl(''),
        comuna: new FormControl(''),
        sexo: new FormControl(''),
        sintomas: new FormControl([''])
      }
    )
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
  }
  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }
  onSaveForm() {
    console.log('Saved');
    this.dbData.saveMessage(this.contactForm.value);
    this.onResetForm();
  }
}
