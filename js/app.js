// Input UI
const input = document.querySelector("#input");


//add event listner to the input field
input.addEventListener("keyup", getUser);


//call the constructor class
const github = new Github;

//call the ui class
const ui = new UI;

//get user function for get the user data
function getUser(e) {
  //input data
  const inputData = e.target.value;

  //check input field if it black remove the user otherwise find the users
  if (inputData === "") {
    //remove user 
    ui.removeUser();

  } else {
    //show the users
    github.getUserData(inputData).then((resolve) => {

      //check the valid user data
      if (resolve.profile.message == "Not Found") {
        ui.showAlert("Not Found", "bg-danger text-center p-2")

      } else {
        // show the user 
        ui.showUser(resolve.profile);
        //show the repository
        ui.getRepos(resolve.repos);
      }
    })

  }


  //remove the default behavior


  e.preventDefault();
}