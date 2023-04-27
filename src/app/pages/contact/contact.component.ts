import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngOnInit() {
  }
  onClickSubmit(result: { username: string; }) {
  console.log("You have entered : " + result.username); 
 }
}
