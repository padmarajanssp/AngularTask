import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-productandsupplierform',
  templateUrl: './productandsupplierform.component.html',
  styleUrls: ['./productandsupplierform.component.scss']
})
export class ProductandsupplierformComponent implements OnInit {
  number:number=0;
  productform:FormGroup;
  filteredOptions: Observable<string[]>;
  filteredOptions1: Observable<string[]>;
  brands:any [] = [
    'bata',
    'diskon',
    'Puma'
  ];
  colors:any=[
    'red',
    'blue',
    'grey',
    'yellow',
    'White',
    'Orange',
    'Pink',
    'brown',
    'Skyblue',
    'green',
  ];
  sizes:any=[
    '8 inch',
    '10 inch',
    '12 inch',
    '16 inch',
    '20 inch',
    '22 inch',
    '25 inch',
  ]
  constructor(private fb:FormBuilder) { }
  //increase and Decrease item Qty;
  addqty()
  {
    this.number+=1;
    if(this.number<0)
    {
      this.number;
    }
    this.productform.controls['Qty'].setValue(this.number);
  }
  decreaseqty()
  {
    this.number-=1;
    if(this.number<0)
    {
      this.number=0;
    }
    this.productform.controls['Qty'].setValue(this.number);
  }

  //for show the result in console
  showresult()
  {
    console.log(this.productform.value);
  }
  ngOnInit() {
    this.productform=this.fb.group({
     'brand':['',Validators.required],
     'productname':['',[Validators.required,Validators.maxLength(10)]],
     'productcode':['',[Validators.required,Validators.maxLength(6),Validators.pattern(/^[A-za-z0-9_]*$/)]],
     'color':['',Validators.required],
     'Qty':['0',Validators.required],
     'size':['',Validators.required],
     'price':['',[Validators.required,Validators.pattern(/^[0-9_]*$/)]],
     'suppliername':['',[Validators.required,Validators.maxLength(20)]],
     'expectedcompletion':['',Validators.required]
    });
  //for search functionalities of size and color
  this.filteredOptions = this.productform.controls['color'].valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter(value)),
  );
  this.filteredOptions1 = this.productform.controls['size'].valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter1(value)),
  );
}
private _filter(value: string): string[] {
const filterValue = value.toLowerCase();
return this.colors.filter(option => option.toLowerCase().includes(filterValue));
}
private _filter1(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.sizes.filter(option => option.toLowerCase().includes(filterValue));
  }
}

