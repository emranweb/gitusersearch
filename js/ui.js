//ui classs

class UI {

  //user is the ouput user details
  showUser(user) {
    const outputUser = `
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h1 class="name mt-3">${user.name}</h1>
        <img src="${user.avatar_url}" alt="" class="img-fluid rounded">
      </div>
      <div class="col-md-8 mt-5">
        <ul class="list-group mt-5">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Repository :
            <span class="badge badge-primary badge-pill">${user.public_repos}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Gist :
            <span class="badge badge-primary badge-pill">${user.public_gists}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Followers :
            <span class="badge badge-primary badge-pill">${user.followers}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Following :
            <span class="badge badge-primary badge-pill">${user.following}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Website :
            <span class="badge badge-primary badge-pill">${user.blog}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
    `
    document.querySelector('.user').innerHTML = outputUser;

  }

  //clear the user data if the seach is blank
  removeUser() {
    document.querySelector(".user").innerHTML = "";
    document.querySelector(".repos-group").innerHTML = "";
  }

  //show alert pass the methos a messgae and a class name
  showAlert(message, classNa) {
    // call the clear methode
    this.clearAlert();

    //create a new element
    const h4 = document.createElement("h4");
    //set the ui class name

    h4.className = classNa;
    //set the message
    h4.appendChild(document.createTextNode(message));

    //alert UI
    document.querySelector(".alert").appendChild(h4);

    //remove the message after 3 sec
    setTimeout(() => {
      this.clearAlert()
    }, 2000)
  }

  //check the running alert and remove another alert
  clearAlert() {
    const current = document.querySelector(".bg-danger");
    if (current) {
      //remove the current alert
      current.remove();
    }
  }

  //get the repositotoroy
  getRepos(repos) {
    //empty variable
    let resOutPut = "";

    //loop arrray for the repository group
    repos.forEach(function (a) {
      resOutPut += `<div class="single">
  <div class="left">${a.name}</div>
  <div class="center">${a.language}</div>
  <div class="right"><a href="${a.html_url} target="_blank">Repository Link</a></div>
</div>`
    })

    document.querySelector(".repos-group").innerHTML = resOutPut;
  }

}