export class AppUser {
  constructor(
    public username: string,
    public password: string,
    public isAuthenticated = false
  ) {}
}
