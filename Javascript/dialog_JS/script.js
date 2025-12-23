const showDialog = document.querySelector("#showBtn");
const dialog = document.querySelector("dialog");
const close = document.querySelector("#closeBtn");

showDialog.addEventListener("click",()=>{
    dialog.showModal();
});

close.addEventListener("click",()=>{
    dialog.close();
});