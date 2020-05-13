import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {
  atencionValle="6206819";
  atencionCali="4865555 Opción 7";
  atencionBuenaventura="3172870273";
  constructor() { }

  ngOnInit(): void {
  }

}
