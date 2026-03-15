let btn = document.querySelectorAll("button")


btn.forEach(function(ele){
    ele.addEventListener("click", function(){
        console.log("Hello");
        if(ele.innerHTML === 'Add Friend'){
            ele.innerHTML === 'Remove'
        }
        else{
            ele.innerHTML == "Add Friend"
        }
        
    })
})