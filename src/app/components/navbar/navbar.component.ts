import { YoutubeSearchAction, YoutubeLoadMore } from 'app/common/actions/youtube.actions';
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavBarComponent {

  @ViewChild('inputValue') inputValue: any;
  youtubeState: any;

  public navigations = [
    { name: 'Home', path: '/'},
    { name: 'Youtube Search', path: '/youtube/search'},
    { name: 'Shopping Cart', path: '/cart'},
  ];
  constructor(private store: Store<any>) {
    this.store.select('youtube').subscribe(response => {
      this.youtubeState = response;
    })
  }

  ngOnInit() {
 
  }

  handleLoadMoreVideos() {
    this.store.dispatch(new YoutubeLoadMore(this.youtubeState)); 
  }

  handleSearchSubmit() {
    console.log('submit search input ', this.inputValue.nativeElement.value);
    const searchTerm = this.inputValue.nativeElement.value;
    this.store.dispatch(new YoutubeSearchAction(searchTerm)); 
    // this.youtubeAction.searchVideos(searchTerm)
    //   .then(data => console.log(data))
    //   .catch(data => console.log(data));
  }
  
}
