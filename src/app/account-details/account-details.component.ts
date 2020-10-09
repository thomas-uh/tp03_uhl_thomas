import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './../../models/Account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Input() account: Account;
  @Output() accountDeleted: EventEmitter<Account> = new EventEmitter<Account>();

  constructor() { }

  public onClick($event: Account): void {
    this.accountDeleted.emit(this.account);
  }

}
