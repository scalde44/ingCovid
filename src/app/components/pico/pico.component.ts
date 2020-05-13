import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pico',
  templateUrl: './pico.component.html',
  styleUrls: ['./pico.component.css']
})
export class PicoComponent implements OnInit {
  cedula: number = -1;
  placa: number = -1;
  texto: string = "";
  dias: any[] = [
    {
      dia: "Lunes",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Martes",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Miercoles",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Jueves",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Viernes",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Sabado",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
    {
      dia: "Domingo",
      salida: false,
      sNormal: false,
      sSinCarro: false,
      nSalir: true
    },
  ];
  constructor() {
    this.metodo();
  }

  ngOnInit(): void {
  }

  setearArray() {
    for (let index = 0; index < this.dias.length; index++) {
      this.dias[index].salida = false;
      this.dias[index].sNormal = false;
      this.dias[index].sSinCarro = false;
      this.dias[index].nSalir = true;
    }
  }
  metodo() {
    this.setearArray();
    if (this.cedula == 0) {
      if (this.placa == -1) {
        this.dias[3].salida = true;
        this.dias[3].nSalir = false;
        this.dias[6].nSalir = false;
        this.dias[6].salida = true;
      }
      else if (this.placa < 1 || this.placa > 2) {
        this.dias[3].sSinCarro = false;
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      } else {
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = false;
        this.dias[3].sSinCarro = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      }
    } else if (this.cedula == 1) {
      if (this.placa == -1) {
        this.dias[0].salida = true;
        this.dias[0].nSalir = false;
        this.dias[5].nSalir = false;
        this.dias[5].salida = true;
      }
      else if (this.placa < 5 || this.placa > 6) {
        this.dias[0].sSinCarro = false;
        this.dias[0].nSalir = false;
        this.dias[0].sNormal = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      } else {
        this.dias[0].nSalir = false;
        this.dias[0].sNormal = false;
        this.dias[0].sSinCarro = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      }
    } else if (this.cedula == 2) {
      if (this.placa == -1) {
        this.dias[0].salida = true;
        this.dias[0].nSalir = false;
        this.dias[6].nSalir = false;
        this.dias[6].salida = true;
      }
      else if (this.placa < 5 || this.placa > 6) {
        this.dias[0].sSinCarro = false;
        this.dias[0].nSalir = false;
        this.dias[0].sNormal = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      } else {
        this.dias[0].nSalir = false;
        this.dias[0].sNormal = false;
        this.dias[0].sSinCarro = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      }
    }
    else if (this.cedula == 3) {
      if (this.placa == -1) {
        this.dias[1].salida = true;
        this.dias[1].nSalir = false;
        this.dias[5].nSalir = false;
        this.dias[5].salida = true;
      }
      else if (this.placa < 7 || this.placa > 8) {
        this.dias[1].sSinCarro = false;
        this.dias[1].nSalir = false;
        this.dias[1].sNormal = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      } else {
        this.dias[1].nSalir = false;
        this.dias[1].sNormal = false;
        this.dias[1].sSinCarro = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      }
    }
    else if (this.cedula == 4) {
      if (this.placa == -1) {
        this.dias[1].salida = true;
        this.dias[1].nSalir = false;
        this.dias[6].nSalir = false;
        this.dias[6].salida = true;
      }
      else if (this.placa < 9 && this.placa > 0) {
        this.dias[1].sSinCarro = false;
        this.dias[1].nSalir = false;
        this.dias[1].sNormal = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      } else {
        this.dias[1].nSalir = false;
        this.dias[1].sNormal = false;
        this.dias[1].sSinCarro = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      }
    }
    else if (this.cedula == 5 || this.cedula == 7) {
      if (this.placa == -1) {
        this.dias[2].salida = true;
        this.dias[2].nSalir = false;
        this.dias[5].nSalir = false;
        this.dias[5].salida = true;
      }
      else if (this.placa < 9 && this.placa > 0) {
        this.dias[2].sSinCarro = false;
        this.dias[2].nSalir = false;
        this.dias[2].sNormal = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      } else {
        this.dias[2].nSalir = false;
        this.dias[2].sNormal = false;
        this.dias[2].sSinCarro = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      }
    }
    else if (this.cedula == 6) {
      if (this.placa == -1) {
        this.dias[2].salida = true;
        this.dias[2].nSalir = false;
        this.dias[6].nSalir = false;
        this.dias[6].salida = true;
      }
      else if (this.placa < 9 && this.placa > 0) {
        this.dias[2].sSinCarro = false;
        this.dias[2].nSalir = false;
        this.dias[2].sNormal = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      } else {
        this.dias[2].nSalir = false;
        this.dias[2].sNormal = false;
        this.dias[2].sSinCarro = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      }
    }

    else if (this.cedula == 8) {
      if (this.placa == -1) {
        this.dias[3].salida = true;
        this.dias[3].nSalir = false;
        this.dias[6].nSalir = false;
        this.dias[6].salida = true;
      }
      else if (this.placa < 1 || this.placa > 2) {
        this.dias[3].sSinCarro = false;
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      } else {
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = false;
        this.dias[3].sSinCarro = true;
        this.dias[6].nSalir = false;
        this.dias[6].sNormal = true;
      }
    }

    else if (this.cedula == 9) {
      if (this.placa == -1) {
        this.dias[3].salida = true;
        this.dias[3].nSalir = false;
        this.dias[5].nSalir = false;
        this.dias[5].salida = true;
      }
      else if (this.placa < 1 || this.placa > 2) {
        this.dias[3].sSinCarro = false;
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      } else {
        this.dias[3].nSalir = false;
        this.dias[3].sNormal = false;
        this.dias[3].sSinCarro = true;
        this.dias[5].nSalir = false;
        this.dias[5].sNormal = true;
      }
    }
  }
}
