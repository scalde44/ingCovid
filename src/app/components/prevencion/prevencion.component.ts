import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.component.html',
  styleUrls: ['./prevencion.component.css']
})
export class PrevencionComponent implements OnInit {
  prevencion: string[]=["Lavarse las manos frecuentemente",
  "Evitar el contacto directo","Usar tapabocas",
  "Cubrirse la boca al toser o estornudar","Limpiar y desinfectar","Aislamiento social","Informarse","Consulta Medica"
  ,"Evitar zonas concurridas","Evitar viajes","Cuidado en Casa"];
  lavarse= "Lávese las manos con frecuencia con agua y jabón por al menos 20 segundos, especialmente después de haber estado en un lugar público, o después de sonarse la nariz, toser o estornudar."
  +"Si no dispone de agua y jabón, use un desinfectante de manos que contenga al menos un 60 % de alcohol. Cubra todas las superficies de las manos y frótelas hasta que sienta que se secaron."
  contactoDirecto= "Evite el contacto cercano con personas que están enfermas, incluso dentro de su casa. De ser posible,"
  +"mantenga una distancia de 6 pies entre la persona enferma y otros miembros de su hogar."
  +"Mantenga distancia de otras personas fuera de su hogar.";
  tapabocas="Todos deberían usar una cubierta de tela para la cara cuando salen de sus casas, por ejemplo,"
  +"para ir a la tienda de comestibles o para buscar otros productos necesarios.";
  cubrirse = "Si se encuentra en un ámbito privado y no tiene puesta la cubierta de tela para la cara, recuerde siempre cubrirse la boca y la"
  +" nariz con un pañuelo desechable o con la parte interna del codo al toser o estornudar."
  +"Bote los pañuelos desechables usados a la basura."
  limpiar= "Limpie Y desinfecte diariamente las superficies que se tocan con frecuencia . Esto incluye las mesas, las manijas de las puertas, los interruptores de luz, los mesones,"
  +"las barandas, los escritorios, los teléfonos, los teclados, los inodoros, los grifos, los lavamanos y los lavaplatos."
  aislamiento="Es importante el aislamiento social para disminuir el numero de contagio, si bien hay personas que desarollan los sintomas hay muchas personas contagiadas"
  +"las cuales cursan asintomaticas o con sintomas leves, las cuales pueden aumentar el numero de infectados";
  informarse="Infórmese a través de fuentes confiables sobre el avance del coronavirus en el mundo, diríjase al sitio web del ministerio de salud de su país, o al portal de la OMS, para evitar la incertidumbre y el pánico. "
  consulta="Si presenta dificultad para respirar, tos seca y fiebre que no se controla llame a su médico o busque atención medica de inmediato."
  zonas ="Si tiene más de 60 años, o si tiene una enfermedad cardiovascular, sufre de diabetes o una afección respiratoria se incremente el riesgo de contagio del virus,"
  +"como precaución evite zonas demasiado concurridas o lugares donde haya gente enferma."
  viajes="Absténgase de viajar si tiene síntomas de enfermedades respiratorias como tos o fiebre, en caso de presentar síntomas durante el vuelo, informe de manera inmediata a la tripulación."
  +"Al llegar a su destino se debe poner en contacto con un médico informándole sus sitios de visita."
  casa="Si presenta síntomas respiratorios estando en su casa, duerma y coma separado de su familia, además, tenga utensilios y cubiertos exclusivos para su uso"
  constructor() { }
  ngOnInit(): void {
  }
  
  descripcionPrevencion:string[]=[
    this.lavarse,this.contactoDirecto,this.tapabocas,this.cubrirse,this.limpiar,this.aislamiento,this.informarse
    ,this.consulta,this.zonas,this.viajes,this.casa
  ]
  imagenesPreventivas: string[]=["wash","distance",
  "mask","sneeze","desinfect","home","information","consulta","persons","travel","cuidadoCasa"]
  validar:boolean=false;
}
