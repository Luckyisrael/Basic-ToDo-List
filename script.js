
//Button click collects the data from the input box
function collectInput (){
    //Get inputed data
    let item = document.getElementById('input-item').value;

    //get the ordered list
    let list = document.getElementById('list');
        list = item;
    
        //create the HTML List tag
    let li = document.createElement('li');
        li.innerText = list;  
        //append the LIST tag to the OL tag
        document.getElementById('list').appendChild(li)

}