import { Component } from '@angular/core';
import {PortfolioComponent } from './portfolio/portfolio.component';

import { fade, ANM_ROUTE_ENTER, routerTransition } from './router.transition';

@Component({
  selector: 'home',
  animations: [fade, routerTransition],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  animateOnRouteEnter = ANM_ROUTE_ENTER;
  thisYear = new Date().getFullYear();
  email: string = 'chris@ccrooke.com';
  projectImages: string[] = [
    'sigma-1.jpg', 
    'sigma-2.jpg', 
    'sigma-3.jpg', 
    'sigma-4.jpg', 
    'sigma-5.jpg'
  ];
  projectImage: string = '/assets/img/sigma-1.jpg';
  currentImage: number = 1;
  counter = 0;
  state = 'in';
  enableAnimation = false;
  
  onClick(imageNum: number = 1) {
    this.enableAnimation = true;
    this.counter = 0;
    this.currentImage = imageNum ? imageNum : this.projectImages.length;
    this.currentImage > this.projectImages.length ? (this.currentImage = 1) : this.currentImage;
    this.toggleState();
  }

  setImage = () => {
    this.projectImage = `/assets/img/${this.projectImages[this.currentImage - 1]}`;
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.setImage();
      }
      
      this.state = 'in';
      this.counter++;
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

}
