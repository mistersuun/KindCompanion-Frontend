import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public currentUser$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // TODO: Check for existing session on service initialization
    this.checkExistingSession();
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(_email: string, _password: string): Observable<User> {
    // TODO: Implement actual login logic
    throw new Error('Login method not yet implemented');
  }

  logout(): void {
    // TODO: Implement actual logout logic
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }

  refreshToken(): Observable<string> {
    // TODO: Implement token refresh logic
    throw new Error('RefreshToken method not yet implemented');
  }

  private checkExistingSession(): void {
    // TODO: Check localStorage for existing tokens and validate them
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and set user if valid
      this.isAuthenticatedSubject.next(false); // Set to true when properly implemented
    }
  }
}