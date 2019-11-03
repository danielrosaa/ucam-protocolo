import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protocolo: object[];
  form = new FormGroup({
    descricao: new FormControl('', Validators.required),
    input: new FormControl('', Validators.required)
  })

  ngOnInit() {
    this.protocolo = [];
  }

  addItem(item) {
    console.log(this.form)
    if (!this.form.get('descricao').invalid) {
      this.protocolo.push({
          "name": item.value,
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

  get descricao() {
    return this.form.get('descricao')
  }
  get input() {
    return this.form.get('input')
  }
}
