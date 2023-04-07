var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// var description = document.createElement('input');
// description.setAttribute('type','text');
// description.className='form-control mr-2';
// description.id = 'description';
// form.appendChild(description);


//  //Create edit button
// var editBtn = document.createElement('button');
// //Add class
// editBtn.className = "btn btn-dark btn-sm float-right edit";
// //Add text node to editBtn 
// editBtn.appendChild(document.createTextNode('Edit'));
// //Select list
// var li = itemList.getElementsByTagName('li');
// //Add edit button to list
// for(let i=0;i<li.length;i++){
//     li[i].append(editBtn);
// }


//Form submit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Add filter
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    //create list element
    var li = document.createElement('li');
    //Add class to list
    li.className = "list-group-item";
    //Add text node to list
    li.appendChild(document.createTextNode(newItem));
    //Add description to list
    li.appendChild(document.createTextNode(description));
    

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

// Filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName1 = item.firstChild.textContent;
        var itemName2 = item.firstChild.nextSibling.textContent;
        // console.log(itemName);
        if((itemName1.toLowerCase().indexOf(text)!= -1)|| (itemName2.toLowerCase().indexOf(text)!= -1)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}


   