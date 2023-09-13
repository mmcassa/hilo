import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.scss']
})
export class SidenavBarComponent implements OnInit {

  private _loggedIn: boolean = true;
  public searchFC = new FormControl(''); 
  private _searchOptions: BehaviorSubject<string[]> = new BehaviorSubject([
    'Testing 1','Another Test 2', 'How do birds fly?','Where is my optomologist today?'
  ]);
  searchOptions: Observable<string[]> = new Observable<string[]>();
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.searchOptions = this.searchFC.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  isLoggedIn() {
    return this._loggedIn;
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this._searchOptions.value.filter(option => option.toLowerCase().includes(filterValue));
  }

  public getSearchOptions(): Observable<string[]> {
    return this._searchOptions.asObservable();
  }


}
