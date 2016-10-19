import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  title = 'title from AppComponent!';

  clicked() {
    console.log('click works')
    axios.get('/api').then(data => console.log(data)) 
  }
}
