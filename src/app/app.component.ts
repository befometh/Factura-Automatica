import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forInput: FormGroup;
  forSelect: FormGroup;
  forRadio: FormGroup;
  factura;
  opcion;
  nombre;
  base;
  tipo;
  
  constructor(private fb: FormBuilder) {
    this.factura = [];
    this.opcion = 4;
    this.base = "";
    this.crearForInput();
    this.crearForSelect();
    this.crearForRadio();

  }
  /**
   * Funcion que permite realizar el cambio entre tipo de campo que quiere ingresar
   * el usuario
   * @param valor Elemento que representa la opcion
   */
  cambiarOpcion(valor) {
    this.opcion = valor;
  }
/**
 * Metodos que se encargan de crear el formulario de cada elemento
 * Elemento Cuadro de texto
 */
  crearForInput() {
    this.forInput = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ,. ]{2,50}$/)]),
    })
  }
/**
 * Elemento Cuadros de selección
 */
  crearForSelect() {
    this.forSelect = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ,. ]{2,50}$/)]],
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9_,]{1,2}$/)]],
    })
  }
/**
 * Elemento Cuadros radiales
 */
  crearForRadio() {
    this.forRadio = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ,. ]{2,50}$/)]],
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9_,]{1,2}$/)]],
    })
  }

  /**
   * Otorga funcionamiento al botón cancelar
   */
  cancelar() {
    this.opcion = 4;
  }

  creaInput() {
    let dato = this.forInput.value();
    let linea = {
      elemento: 1,
      nombre: dato.nombre,
      tipo: dato.tipo
    }
    this.factura.push = linea;
    this.opcion = 4;
  }

  creaSelectBut() {
    let dato = this.forSelect.value();
    this.asignarSelect(dato);
    let linea = {
      elemento: 2,
      nombre: dato.nombre,
      cantidad: dato.cantidad
    };
    this.factura.push(linea);
    this.opcion = 4;
  }

  asignarSelect(linea){
    let elemento = 0
  }

  creaRadioBut() {
    let dato = this.forSelect.value();
    this.asignarSelect(dato);
    let linea = {
      elemento: 3,
      nombre: dato.nombre,
      cantidad: dato.cantidad
    };
    this.factura.push(linea);
    this.opcion = 4;
  }
}
