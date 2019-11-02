import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  descricao = ''
  protocolo = [
    {
      "id": 1,
      "name": "Trancamento/Cancelamento",
      "subtitulo": "12 tipos de natureza",
      "unidade": 43,
      "tipos_natureza": 234,
      "active": false
    },
    {
      "id": 2,
      "name": "Valores pagos",
      "subtitulo": "12 tipos de natureza",
      "unidade": 12,
      "tipos_natureza": 234,
      "active": true
    },
    {
      "id": 3,
      "name": "Declaração",
      "subtitulo": "12 tipos de natureza",
      "unidade": 12,
      "tipos_natureza": 234,
      "active": true
    },
    {
      "id": 4,
      "name": "Declaração",
      "subtitulo": "12 tipos de natureza",
      "unidade": 12,
      "tipos_natureza": 234,
      "active": true
    },
    {
      "id": 5,
      "name": "Declaração",
      "subtitulo": "12 tipos de natureza",
      "unidade": 12,
      "tipos_natureza": 234,
      "active": true
    }
  ]

  log(x) {
    console.log(x)
  }
}
