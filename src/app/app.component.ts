import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protocolo: Protocolo[];
  desc: HTMLInputElement;
  novaNatureza: HTMLButtonElement;
  editar: boolean;
  indexProtocolo: number;
  form = new FormGroup({
    descricao: new FormControl('', Validators.required),
    input: new FormControl('', Validators.required)
  })

  ngOnInit() {
    this.protocolo = []
    this.editar = false
  }
  addItem(item) {
    if (!this.form.get('descricao').invalid) {
      this.protocolo.push({
          "nome": item.value,
          "subtitulo": "12 tipos de natureza",
          "unidade": 12,
          "tipos_natureza": 234
        })
      this.clearForm()
    } else {
      this.form.setErrors({
        fieldsEmpty: true
      })
    }
  }

  clearForm() {
    this.form.reset();
  }

  editItem(index: number, desc: HTMLInputElement, botao: HTMLButtonElement) {
    desc.focus()
    this.editar = true
    this.indexProtocolo = index
    desc.value = this.protocolo[index].nome
    // this.protocolo[index].nome = this.form.get('descricao').value
    // this.protocolo.splice(index)
  }

  updateProtocolo() {
    this.protocolo[this.indexProtocolo].nome = this.form.get('descricao').value
    this.editar = false
    this.clearForm()
  }

  deleteProtocolo(index: number) {
    this.protocolo.splice(index, 1)
  }

  get descricao() {
    return this.form.get('descricao')
  }
  get input() {
    return this.form.get('input')
  }
}

interface Protocolo {
  nome: string,
  subtitulo: string,
  unidade: number,
  tipos_natureza: number
}
