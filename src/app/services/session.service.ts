import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user$ = new BehaviorSubject<any>(null);
  private token$ = new BehaviorSubject<string | null>(null)

  get User$(): Observable<any> { return this.user$.asObservable(); }
  get Token$(): Observable<string | null> { return this.token$.asObservable(); }

  constructor(
    private $router: Router
  ) {
    this.Token$.subscribe(token => {
      if (token) {
        localStorage.setItem("token", token);
      } else if (localStorage.getItem("token")) {
        this.token$.next(localStorage.getItem("token"))
      }
    })
    this.User$.subscribe(user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user))
      } else if (localStorage.getItem("user") != null) {
        this.user$.next(JSON.parse(localStorage.getItem("user")!))
      }
    })
    this.token$.next(localStorage.getItem('token'))
    this.user$.next(JSON.parse(localStorage.getItem("user")!))
  }

  open(data: {token: string, user: any}) {
    this.user$.next(data.user);
    this.token$.next(data.token);
  }

  refresh(data: { token?: string, user?: any}) {
    if (data.token) {
      this.token$.next(data.token!)
    }
    if (data.user) {
      this.user$.next(data.user!)
    }
  }

  close() {
    this.user$.next(null);
    this.token$.next(null);
    this.$router.navigate(['auth/login']);
  }
}
