import { Component } from '@angular/core';
@Component({
selector: 'app-root',
template: `
<div>
  <h2>Chart.js Example in Angular</h2>
  <app-chart></app-chart>
</div>
`,
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
title(title: any) {
  throw new Error('Method not implemented.');
}
public role:any;
constructor(){
}

}