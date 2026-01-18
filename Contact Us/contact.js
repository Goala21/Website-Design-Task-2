function checkinginput(event){
    event.preventDefault();

    let usernameInput = document.getElementById("username_input").value;
    let surnameInput = document.getElementById("surname_input").value;
    let contactInput = document.getElementById("contact_input").value;
    let subjectInput = document.getElementById("subject_input").value;
    let commentInput = document.getElementById("comment_input").value;

    if ((usernameInput == "") || (subjectInput == "") || (surnameInput == "") || (contactInput == "") || (commentInput == "")){
        alert("Please enter all the details")
    }
    else window.location.href = "mailto:support@example.com";



}