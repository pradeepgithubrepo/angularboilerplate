import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { MlsrvcService } from 'src/app/mlsrvc.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirm } from 'src/app/dialog/dialog_confirm'

@Component({
  selector: 'app-main-component',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-12"></div>
      <div class="col-md-6 mb-12">
        <h1> Intelligent Schema Mapper </h1>
      </div>
      <div class="col-md-2 mb-12"></div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-12"></div>
        <img [src]="imageSrc"/>
      <div class="col-md-2 mb-12"></div>
    </div>
    <br/>
    <br/>

  </div>
  `,
  styles: [`
    img {
      width: 400px;
      height: 200px;
    }
    `
  ]
})
export class MainComponentComponent implements OnInit {


  onSubmit() {
  }


  imageSrc = 'assets/ai.png'

  constructor() {
  }

  ngOnInit(): void {
  }



}
