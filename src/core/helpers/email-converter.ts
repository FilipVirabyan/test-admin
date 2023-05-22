export class EmailConverter {

  static convertEmailToToken(email: string): string {
    return btoa(email);
  }

   static encodeToken(token: string): string {
    return atob(token);
  }
}
