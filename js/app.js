// alert('Pamiętaj, że to tylko wersja testowa, wygląd a tymbardziej funkcjonalność może się znacząco różnić w efekcie końcowym');
// alert('Strona może się źle wyświetlać na dużych ekranach, a na mobile nie jest jeszcze zrobiona i będzie dopiero na koniec');
// alert('Sekcja z dodawaniem postów jest dopiero zaczęta i nie działa dobrze, jeśli w ogóle');
let close  = document.querySelector('.alert');
let textArea = document.querySelector('.addPost-input');

const postHolder = [];
function closeWindow() {
    close.classList.add('hide')
}

function addPostToArray() {
    if(textArea.value.length >= 13){
        postHolder.push(textArea.value);
        console.log(postHolder);
        document.querySelector('.addPost-input').value = "";
    }else{
        document.querySelector('.addPost-input').value = "";
        alert('Minimalna ilość znaków wynosi 13');
    }
}

function createPost() {
   let  newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Hi there and greetings!</h1>";

  let  my_div = document.querySelector(".div-creator");
    document.body.insertBefore(newDiv, my_div);
}




window.onload=function()  //executes when the page finishes loading
{
    setTimeout(func1, 3500);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.

};
function func1()
{
    document.querySelector(".alert").className="show alert";
}


let divCreator  = document.querySelector('.div-creator');

function test() {

    if(postHolder[0]){
        let element = document.createElement("div");
        element.classList.add('post-test');
        document.getElementById('lc').appendChild(element);
        let postTest = document.querySelector('.post-test');
        for(let i = 0; i < postHolder.length; i++){
            postTest.innerHTML= postHolder[i++];
        }
    }else{
        alert('Nie napisałeś żadnej historii :C')
    }
}
function remove() {
    let postTest = document.querySelector('.post-test');
    postTest.remove()

}



// IEFE
(() => {
    // state variables
    let toDoListArray = [];
    // ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");

    // event listeners
    form.addEventListener('submit', e => {
        // prevent default behaviour - Page reload
        e.preventDefault();
        // give item a unique ID
        let itemId = String(Date.now());
        // get/assign input value
        let toDoItem = input.value;
        //pass ID and item into functions
        addItemToDOM(itemId , toDoItem);
        addItemToArray(itemId, toDoItem);
        // clear the input box. (this is default behaviour but we got rid of that)
        input.value = '';
    });

    ul.addEventListener('click', e => {
        let id = e.target.getAttribute('data-id')
        if (!id) return // user clicked in something else
        //pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    // functions
    function addItemToDOM(itemId, toDoItem) {
        // create an li
        const li = document.createElement('li');
        li.classList.add('post-test');
        li.setAttribute("data-id", itemId);
        // add toDoItem text to li
        li.innerText = toDoItem;
        // add li to the DOM
        ul.appendChild(li);

        let local = localStorage.getItem("html");
        if (local == null){
            localStorage.setItem("html", li.outerHTML);
            console.log('HTML setted in localStorage');
        } else
            console.log(local);
    }

    function addItemToArray(itemId, toDoItem) {
        // add item to array as an object with an ID so we can find and delete it later
        toDoListArray.push({ itemId, toDoItem});
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        // get the list item by data ID
        var li = document.querySelector('[data-id="' + id + '"]');
        // remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        // create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter(item => item.itemId !== id);
        console.log(toDoListArray);
    }

})();
let cookie = document.querySelector('.post-test');

function store() {
    window.localStorage.myitems = cookie.innerHTML;
}