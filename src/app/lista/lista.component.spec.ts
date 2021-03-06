import { ListaComponent } from "./lista.component"

describe('ListComponent', () => {
  let component: ListaComponent
  beforeEach(() => {
    component = new ListaComponent()
  })

  it('testa se evento para editar é chamado a partir do componente', () => {
    let index = null
    component.edit.subscribe(value => index = value)

    component.eventEdit(1)

    expect(index).toBe(1)
  })

  it('testa se evento para deletar é chamado a partir do componente', () => {
    let index = null
    component.delete.subscribe(value => index = value)

    component.eventDelete(1)

    expect(index).toBe(1)
  })

  it('testa se botão "Deletar" exclui item da lista', () => {
    let index = null
    component.delete.subscribe(value => index = value)

    component.eventDelete(1)

    expect(index).toBe(1)
  })
})
