export class AuthService {

  loggedIn = false;

  isAuthenticated(){
    this.loggedIn = true;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      },800);
    });
    return promise;
  }

}