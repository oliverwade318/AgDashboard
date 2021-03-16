import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutContext } from 'src/app/store/states/layout.state';

import * as layoutActions from 'src/app/store/actions/layout.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<LayoutContext>) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.store.dispatch(layoutActions.doToggleMenu())
  }
}
