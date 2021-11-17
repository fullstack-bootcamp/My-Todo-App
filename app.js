// add 

 //button
const addItem=function addItem(){

    const input=document.querySelector('input')
    const value=input.value;
   
    //if you don't enter value 
    if(value==''){
       return
    }
    
    const todoItem=document.createElement('div')
    todoItem.className='flex mt-1 border-2 border-gray-400 rounded items-center w-full px-2';
    
    const tickIcon=document.createElement('i')
    tickIcon.className='far fa-check-circle pr-2';

    const todoText=document.createElement('h4');
    todoText.className='flex-1';
    todoText.innerText=value;

    const removeIcon=document.createElement('i');
    removeIcon.className='fas fa-trash-alt hover:text-red-800'

    const mainTodoBox=document.querySelector('#mainTodoBox')
    
    todoItem.append(tickIcon)
    todoItem.append(todoText)
    todoItem.append(removeIcon)
    mainTodoBox.append(todoItem)
    removeIcon.ondblclick=removeTodo;
    tickIcon.onclick=doneTodo;
//    input.onkeydown=enterKey;
    

    input.value=''
    
 
   


}

const div=document.querySelector('div')
div.parent



// remove button
function removeTodo(event){
    const button=event.target
    const parentDiv= button.parentElement
    parentDiv.remove();
    mainTodoBox=removeTodo;
    
}

//enter key
function enterKey(event){
    const EnterKey=event.key
    if(EnterKey=='Enter'){
      addItem()
    }  
 }




 //done 

 function doneTodo(event){
    const doneButton = event.target
    parentDiv=doneButton.parentElement
    console.log(parentDiv)

    parentDiv.className="flex mt-1 border-2 border-gray-400 rounded items-center w-full px-2 bg-green-400"
    doneButton.className='text-white far fa-check-circle pr-2'


    

 }


 