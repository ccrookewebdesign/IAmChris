import { Component } from '@angular/core';

import { ANM_ROUTE_ENTER, routerTransition } from './router.transition';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  template: `
  <div class="container" class="routercontainer" 
    [@routerTransition]="o.isActivated && o.activatedRoute.routeConfig.path">
    <router-outlet #o="outlet"></router-outlet>
  </div>
  `
})
export class AppComponent {
  animateOnRouteEnter = ANM_ROUTE_ENTER;
}
