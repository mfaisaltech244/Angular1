import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private token: string | null = null;

  constructor() {
    this.loadAuthState();
  }

  private loadAuthState(): void {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser && storedToken) {
      this.user$.next(JSON.parse(storedUser));
      this.token = storedToken;
      this.isLoggedIn$.next(true);
    }
  }

  login(username: string, email?: string): boolean {
    // Simulate authentication - in real app, call API
    const user: User = {
      id: '1',
      username: username,
      email: email || `${username}@example.com`,
      role: 'user'
    };

    const token = this.generateToken();

    // Store in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('authToken', token);

    // Update state
    this.user$.next(user);
    this.token = token;
    this.isLoggedIn$.next(true);

    return true;
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    this.user$.next(null);
    this.token = null;
    this.isLoggedIn$.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn$.value;
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getUser(): User | null {
    return this.user$.value;
  }

  getUser$(): Observable<User | null> {
    return this.user$.asObservable();
  }

  getToken(): string | null {
    return this.token;
  }

  private generateToken(): string {
    return 'token_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}
