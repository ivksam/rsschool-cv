const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const contentToggles = document.querySelectorAll('.content-toggle')
const logInPopup = document.querySelector('.login_popup');
const signInPopup = document.querySelector('.signup_popup');
const popup = document.getElementById('popup');
const popupBody = document.querySelector('.popup_body')
const form = document.querySelector('.popup_form');

const popupOpenToggle = function (){
    popup.classList.toggle("open");
    body.classList.toggle("hidden");
}
const popupContentToggle = function (){
    logInPopup.classList.toggle("close");
    signInPopup.classList.toggle("close");
}
document.addEventListener("click", function (e) {
    const target = e.target;
    const its_popup = target == popupBody || popupBody.contains(target);
    const popup_is_active = popup.classList.contains("open");
    if (!its_popup && popup_is_active) {
        popupOpenToggle();
    }
});
for (let i = 0; i<popupLinks.length; i++){
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function(e){
        e.stopPropagation();
        popupOpenToggle();
        if (logInPopup.classList.contains("close")){
            popupContentToggle();
        }
    });
}
for (let i = 0; i<contentToggles.length; i++){
    const contentToggle = contentToggles[i];
    contentToggle.addEventListener('click', function(e){
        e.stopPropagation();
        popupContentToggle();
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    if(email != '' && password != ''){
            alert('Hello, '+email+'\nYour password: '+password);    
            form.reset();
    } else alert('Fields must be filled');
  });

