import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutContext } from 'src/app/store/states/layout.state';
import * as layoutActions from 'src/app/store/actions/layout.actions';
import * as layoutSelectors from 'src/app/store/selectors/layout.selectors';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  screenHeight;
  screenWidth;

  @HostListener('window:resize', ['$event'])
  onresize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.store.dispatch(layoutActions.doResize({height: this.screenHeight, width: this.screenWidth}))
  }

  showMenu$: Observable<boolean>;

  constructor(private store: Store<LayoutContext>) { }

  ngOnInit(): void {
    this.getInitialViewport();
    this.showMenu$ = this.store.select(layoutSelectors.selectShowMenu);
  }

  getInitialViewport(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.store.dispatch(layoutActions.doResize({height: this.screenHeight, width: this.screenWidth}))
  }
}
