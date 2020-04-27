// alert('Pamiętaj, że to tylko wersja testowa, wygląd a tymbardziej funkcjonalność może się znacząco różnić w efekcie końcowym');
// alert('Strona może się źle wyświetlać na dużych ekranach, a na mobile nie jest jeszcze zrobiona i będzie dopiero na koniec');
// alert('Sekcja z dodawaniem postów jest dopiero zaczęta i nie działa dobrze, jeśli w ogóle');
let close  = document.querySelector('.alert');
let textArea = document.querySelector('.addPost-input');
const postHolder = [];
function closeWindow() {
    close.classList.add('active')
}

function addPostToArray() {
    if(textArea.value.length >= 9){
        postHolder.push(textArea.value);
        console.log(postHolder);
        document.querySelector('.addPost-input').value = "";
    }else{
        document.querySelector('.addPost-input').value = "";
        console.log('else')
    }
}

