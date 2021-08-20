import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit(): void {


  }
  goBack() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
