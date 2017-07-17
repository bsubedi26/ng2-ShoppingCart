import { YoutubeAction } from 'app/common/actions/youtube.actions';
import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavBarComponent {

  @ViewChild('inputValue') inputValue: any;

  public navigations = [
    { name: 'Home', path: '/'},
    { name: 'Youtube Search', path: '/youtube/search'},
    { name: 'Shopping Cart', path: '/cart'},
  ];
  constructor(private productService:ProductService, private youtubeAction: YoutubeAction) {}

  ngOnInit() {
 
  }

  handleSearchSubmit() {
    console.log('submit search input ', this.inputValue.nativeElement.value);
    const searchTerm = this.inputValue.nativeElement.value;
    
    this.youtubeAction.searchVideos(searchTerm)
      .then(data => console.log(data))
      .catch(data => console.log(data));
  }
  
}
