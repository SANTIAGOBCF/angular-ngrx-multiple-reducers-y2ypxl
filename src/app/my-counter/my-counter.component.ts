import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDecrement, CartIncrement, CartReset } from '../store/actions/cart.actions';
import { CartState, selectCart } from '../store/reducers/cart.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCounterComponent {
  cart$: Observable<any>;
  counter = 0;

  constructor(private store: Store<CartState>) {
    // this.cart$ = store.pipe(select(selectCart));
    store.pipe(select(selectCart)).subscribe((cart) => {
      this.counter = cart.counter;
    });
  }

  increment() {
    this.store.dispatch(new CartIncrement({ counter: this.counter + 1 }));
  }

  decrement() {
    this.store.dispatch(new CartDecrement({ counter: this.counter - 1 }));
  }

  reset() {
    this.store.dispatch(new CartReset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/