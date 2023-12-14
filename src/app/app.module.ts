import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { reducers } from './store/reducers';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, MyCounterComponent, UserInfoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/