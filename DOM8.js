var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


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