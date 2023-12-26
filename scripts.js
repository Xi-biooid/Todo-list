
let listContainer = document.querySelector('.the-list');
let addButton = document.querySelector('.btn')
let emptyString = document.querySelector('.todo-app')

addButton.addEventListener('click', function(){
    let inputBar = document.getElementById('inputbox');
    let inputItem = inputBar.value;
    if (inputItem === ''){
       alert('put some thing')
    } else{
    let listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    listItem.innerHTML = inputItem;

    listItem.addEventListener('click', function(){

 if (!this.classList.contains('checked')){
    this.classList.add('checked');
    listItem.innerHTML = ` ${inputItem} <span><img src="delete.png" alt="delete-icon" class="delete"> `

    const spans = document.querySelectorAll('span');
spans.forEach( (span) => {
  span.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.remove();
  });
}); 
    
   
 }else{
  this.classList.remove('checked');
  listItem.innerHTML = inputItem;

 }
})

} 

inputBar.value = ''; 
})