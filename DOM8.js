var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//  //Create edit button
// var editBtn = document.createElement('button');
// //Add class
// editBtn.className = "btn btn-dark btn-sm float-right edit";
// //Add text node to editBtn 
// editBtn.appendChild(document.createTextNode('Edit'));
// //Select list
// var li = document.getElementsByClassName('list-group-item');
// //Add edit button to list
// for(let i=0;i<li.length;i++){
//     li[i].append(editBtn);
// }


//Form submit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);


//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var input = document.getElementById('item').value;

    //create list element
    var li = document.createElement('li');
    //Add class to list
    li.className = "list-group-item";
    //Add text node to list
    li.appendChild(document.createTextNode(input));
    

    //Create del button element
    var deleteBtn = document.createElement('button');
    //Add class to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Add text node and add it to delete button 
    deleteBtn.appendChild(document.createTextNode('X'));
    


    //Create edit button
    var editBtn = document.createElement('button');
    //Add class
    editBtn.className = "btn btn-dark btn-sm float-right edit";
    //Add text node to editBtn 
    editBtn.appendChild(document.createTextNode('Edit'));

    //Add edit button to list
    li.appendChild(editBtn);
    //Add delete button to list
    li.appendChild(deleteBtn);
    
    //Add list to ul
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


   