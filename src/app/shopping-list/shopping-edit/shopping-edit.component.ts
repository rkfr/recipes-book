import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingridient} from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddItem(): void {
    this.ingredientAdded.emit(
      new Ingridient(this.nameInputRef.nativeElement.value, Number(this.amountInputRef.nativeElement.value))
    );
  }
}
