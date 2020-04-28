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


function test() {

    let element = document.createElement("div");
    element.classList.add('post-test');
    document.getElementById('lc').appendChild(element);
    let postTest = document.querySelector('.post-test')
    postTest.innerHTML= postHolder[0];

}
