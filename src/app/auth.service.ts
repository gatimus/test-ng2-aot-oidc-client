import { Injectable } from '@angular/core';
import { UserManager, WebStorageStateStore } from 'oidc-client';

@Injectable()
export class AuthService {

  public userManager: UserManager;

  constructor() {
    const settings = { /* ... */ };
    this.userManager = new UserManager(settings);
  }

}
