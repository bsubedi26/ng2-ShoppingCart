import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'title from AppComponent!';

  // first:Product = {
  //   id: 1,
  //    name: "first_Product"
  // }

  Products:Product[] = [
      { id: 1, name: 'Dell Streak', src: "/assets/img/phones/dell-streak-7.0.jpg" },
      { id: 2, name: 'Dell Venue', src: "/assets/img/phones/dell-venue.0.jpg" },
      { id: 3, name: 'Droid 2', src: "/assets/img/phones/droid-2-global-by-motorola.0.jpg" },
      { id: 4, name: 'Droid Pro', src: "/assets/img/phones/droid-pro-by-motorola.0.jpg" },
      { id: 5, name: 'Motorola Bravo', src: "/assets/img/phones/motorola-bravo-with-motoblur.0.jpg" },
      { id: 6, name: 'Motorola Defy', src: "/assets/img/phones/motorola-defy-with-motoblur.0.jpg" },
      { id: 7, name: 'Motorola Xoom', src: "/assets/img/phones/motorola-xoom-with-wi-fi.0.jpg" },
      { id: 8, name: 'Samsung Galaxy Tab', src: "/assets/img/phones/samsung-galaxy-tab.0.jpg" },
      
      
  ]


  
  
}

    // { id: 4, name: 'Celeritas' },
    // { id: 5, name: 'Magneta' },
    // { id: 6, name: 'RubberMan' },
    // { id: 7, name: 'Dynama' },
    // { id: 8, name: 'Dr IQ' },
    // { id: 9, name: 'Magma' },
    // { id: 10, name: 'Tornado' }