import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-mini-btn',
  templateUrl: './sidenav-mini-btn.component.html',
  styleUrls: ['./sidenav-mini-btn.component.scss']
})
export class SidenavMiniBtnComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() svg: string | undefined;
  @Input() route: string | undefined;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>;

  constructor(
    public router: Router
    ) {
    // console.log(this.route.);
  }

  ngOnInit(): void {
    
  }

  clicked() {

  }

   
}
