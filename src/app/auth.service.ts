export class AuthService {

  loggedIn = false;

  isAuthenticated(){
    if (localStorage.getItem('isLogin') !== null && localStorage.getItem('isLogin') !== '') {
      this.loggedIn = true;
    }
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      },800);
    });
    return promise;
  }

}