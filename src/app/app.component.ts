import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pathval:any=12121;

getcolval(event)
{
console.log("peintting getcolval event", event);
}
}
