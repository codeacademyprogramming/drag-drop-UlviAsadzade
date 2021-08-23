const todoBox = document.querySelector(".todo-box");
const progressBox = document.querySelector(".progress-box");
const doneBox = document.querySelector(".done-box");
const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const customMenu = document.getElementById("custom-menu");
const body = document.querySelector("body");
const deleteItem = document.querySelector(".item-delete");


input.addEventListener("change", function (e) {
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = e.target.value;
    text.setAttribute('id', 'text');
    text.setAttribute('draggable', true);
    todoBox.appendChild(text);
    e.target.value = "";

    text.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        customMenu.classList.add("visible");
        customMenu.style.top = e.clientY + "px";
        customMenu.style.left = e.clientX  + "px";;
    });

    body.addEventListener("click", function (e) {
        customMenu.classList.remove("visible");
    });

    deleteItem.addEventListener('click', function(){
        todoBox.removeChild(text);
    })



    const events = ["dragenter", "dragleave", "dragover"];
    events.forEach(dragEvent => {
        progressBox.addEventListener(dragEvent, function (e) {
            e.preventDefault();
        });
        doneBox.addEventListener(dragEvent, function (e) {
            e.preventDefault();
        })
    })
    
    let texts = document.querySelectorAll(".todo-box .text")
    texts.forEach(text => {
        text.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text", e.target.id);
        })
    })
    
    progressBox.addEventListener("drop", function (e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(data));
    
    })

    doneBox.addEventListener("drop", function (e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(data));
    
    })



})



button.addEventListener("click", function () {
    if(input.value.length>0){
        const text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = input.target.value;
        text.setAttribute('id', 'text');
        text.setAttribute('draggable', true);
        todoBox.appendChild(text);
        input.target.value = "";
    }
    
})






