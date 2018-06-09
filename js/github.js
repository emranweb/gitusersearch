//class construtor
class Github {
  constructor() {
    this.id = "e1e72b81221b1f468cda"; // secrect id
    this.secret = "3fb215cad20fca64d5a18f8f2fbb8c1f1d3434af"; //secret code
    this.count = 5; // per page count
    this.sort = "created:asc"; // letest gig sort
  }

  //use data methose this "user parater pass the input" this is asynchonus mehode
  async getUserData(user) {
    //fetch the data from api and store in variable
    const userRespond = await fetch(`https://api.github.com/users/${user}?client_id="${this.id}&client_secret=${this.secret}`);
    
    //uer respository data using fetch
    const reposRespond = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.sort}&client_id="${this.id}&client_secret=${this.secret}`);

      //call the repository in joson format
    const repos = await reposRespond.json();

    //call the data in joson format
    const profile = await userRespond.json();

    //return the profile data in object
    return {
      profile: profile,
      repos: repos,
    }
  }

}