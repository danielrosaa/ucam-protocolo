import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ListaComponent } from './lista/lista.component';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  var component: AppComponent
  var fixture: ComponentFixture<AppComponent>
  beforeEach(() => {
    // component = new AppComponent()
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ListaComponent,
        SidebarComponent,
        HeaderComponent
      ]
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('teste se existe campo "Descrição"', () => {
    expect(component.form.contains('descricao')).toBeTruthy()
  });

  it('testa se "Descrição" é obrigatório', () => {
    let descricao = component.form.controls['descricao']

    descricao.setValue('')

    expect(descricao.valid).toBeFalsy()
  });

  it('testa se botão "Nova Natureza" adiciona item à lista', () => {
    let button = fixture.debugElement.query(By.css('button#novaNatureza'))
    let item = component.form.get('descricao')
    item.setValue('Daniel')
    button.triggerEventHandler('click', null)
    component.addItem(item)

    expect(component.protocolo.length > 0).toBeTruthy()
  });

});
