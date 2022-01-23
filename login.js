const loginForm = document.querySelector("#login-location");
const loginInput = document.querySelector("#login-form input");
const setLoginMessage = document.querySelector("#logined-message");
const memoview = document.getElementById("memo-location");
const timeForm = document.getElementById("time-now");
const sidebar = document.getElementById("sidebar");

const CLASS_HIDDEN = "hidden";
const USER_KEY = "username";
const savedUsername = localStorage.getItem(USER_KEY);

function LoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CLASS_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USER_KEY, username);
    getLoginMessage(username);
}

function getLoginMessage(username){
    setLoginMessage.innerHTML = `Welcome ${username}!`;
    setLoginMessage.classList.remove(CLASS_HIDDEN);
    memoview.style.display = 'flex';
    timeForm.classList.remove(CLASS_HIDDEN);
    sidebar.style.display = 'flex';
}

if(savedUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", LoginSubmit);
}
else{
    getLoginMessage(savedUsername);
}
