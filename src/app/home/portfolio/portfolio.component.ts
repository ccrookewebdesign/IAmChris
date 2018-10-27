import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fade } from '../router.transition';

@Component({
  selector: 'portfolio',
  animations: [fade],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isLoggedIn: boolean = false;
  loginError: boolean = false;
  guest: string = '';
  counter = 0;
  state = 'out';
  enableAnimation = false;

  form = this.fb.group({
    login: ['', Validators.required]    
  });
  
  constructor(private fb: FormBuilder) { }

  btnClick() {
    this.guest = this.form.value.login.toLowerCase();
    
    if(this.guest === 'headfarmer') {
      this.enableAnimation = true;
      this.counter = 0;
      this.loginGuest();
      //this.state = this.state === 'in' ? 'out' : 'in';
    } else {
      this.isLoggedIn = false;
      this.loginError = true;
    }
    
    console.log('this.form.login', this.form.value.login);
  }

  onDone($event) {
    
    this.state = 'in';
  
  }

  loginGuest() {
    this.isLoggedIn = true;
    this.loginError = false;
  }
  
}
