import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css']
})
export class SintomasComponent implements OnInit {
  mostrarFiebre:boolean =false;
  mostrarTos:boolean =false;
  mostrarCansancio:boolean =false;
  fiebre="La fiebre es un aumento temporal de la temperatura del cuerpo, en general debido a una enfermedad"
  +" Tener fiebre es signo de que algo fuera de lo común está pasando en el cuerpo."
  +"Para un adulto, la fiebre puede ser molesta, pero normalmente no es algo que causa preocupación a menos que alcance los 103 °F (39,4 °C) o más."
  +" En lactantes y bebés, una temperatura algo elevada puede indicar una infección grave."
  tosSeca="Es la tos irritante e insistente que no presenta expectoración."
  +"Suele sonar dura y en ocasiones se producen verdaderos ataques de tos."
  +"Sea cual sea su causa es importante evitar que se perpetúe, tratándola desde el primer síntoma, y así evitar el “circulo vicioso de la tos”."
  +"Por lo tanto, el tratamiento específico de la tos seca debe reducir su intensidad y frecuencia."
  cansancio="Todo el mundo se siente cansado de vez en cuando. A veces ocurre que sólo desea quedarse en cama."
  +" Pero tras una buena noche de sueño, la mayoría de la gente se siente renovada y lista para enfrentar un nuevo día."
  +" Si sigue sintiéndose cansado por semanas, es hora de ver a su médico, quien puede ayudarle a averiguar lo que está causando su fatiga y recomendar maneras de aliviarle."
  disnea="La disnea es la dificultad respiratoria o falta de aire. Es una sensación subjetiva y por lo tanto de difícil definición."
  +"La dificultad respiratoria es una afección que involucra una sensación de dificultad o incomodidad al respirar o la sensación de no estar recibiendo suficiente aire."
  mocos="Es un trastorno nasal que se debe a una excesiva inflamación de los vasos sanguíneos,"
  +"que irrigan las membranas mucosas que recubren el interior de las fosas nasales, dificultando el flujo normal de aire."
  cabeza="El dolor de cabeza o cefalea representa una de las formas más comunes de dolor en la raza humana. Generalmente el dolor de cabeza se presenta de forma intermitente."
  +"Las formas más frecuentes corresponden a la migraña o jaqueca y a la cefalea de tensión"
  sintomas:string[]=["Fiebre","Tos seca","Cansancio","Dificual para respirar","Obstruccion nasal","Dolor de cabeza"];
  imagenes:string[]=["fiebre","tos","cansancio","disnea","nariz","headache"
]
validar:boolean=false;
constructor() { }
  sintomasDescripcion=[this.fiebre,
    this.tosSeca,
    this.cansancio,
    this.disnea,this.mocos,
    this.cabeza
  ]
  ngOnInit(): void {
  }
}
