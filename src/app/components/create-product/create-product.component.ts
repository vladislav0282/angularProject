import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
    ){
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl // для того чтобы в шаблоне можно было обратиться к title.errors
  }

  ngOnInit(): void {
  }

  submit(){
    this.productsService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'Test Good Product',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating:{
        rate: 42,
        count:1
    }
    }).subscribe(()=>{
      this.modalService.close()
    })
  }
}
