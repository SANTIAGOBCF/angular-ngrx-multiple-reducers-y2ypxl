import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState, selectUser, mTstamp, selectUserJustCarreer, selectUserJustUser } from '../store/reducers/user.reducer';
import { UserLogout, UserLogin, ChangeCarreer, ChangeInputCarreer } from '../store/actions/user.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {

  user$: Observable<any>;
  userJustCarreer$: Observable<any>;
  userJustUser$: Observable<any>;

  carreer: string='';


  constructor(private store: Store<UserState>) {
    this.user$ = store.pipe(select(selectUser));
    this.userJustCarreer$ = store.pipe(select(selectUserJustCarreer));
    this.userJustUser$ = store.pipe(select(selectUserJustUser));

  }

  ngOnInit() {

  }

  resetForm(form: NgForm) {
    this.store.dispatch(new ChangeInputCarreer({carreer:form.value.carreer}));
    form.resetForm(); // Reset the form
  }

  onInputChange(value: string) {
    this.store.dispatch(new ChangeInputCarreer({carreer:value}));
  }

  login() {
    this.store.dispatch(new UserLogin(
      { uName: 'Rij', isAdmin: true,ts: mTstamp(), loggedIn: true  }
    ));
  }

  logout() {
     this.store.dispatch(new UserLogout());
  }

  changeCarreer(){
    this.store.dispatch(new ChangeCarreer({carreer:"Doctor"}))
  }

}