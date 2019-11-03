import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  @Input('protocolo') protocolo: Protocolo[];
  @Output('edit') edit = new EventEmitter();
  @Output('delete') delete = new EventEmitter();

  eventEdit(index: number) {
    this.edit.emit(index)
  }

  eventDelete(index: number) {
    this.delete.emit(index)
  }
}
export interface Protocolo {
  nome: string,
  subtitulo: string,
  unidade: number,
  tipos_natureza: number
}

