// Get the modal
var modal = document.getElementById('BoxModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var objModal = {
	car:{
		title:'xxxx',
		description:'cccc',
		imageURL:'xxx',
		linkURL:'xxxx',		
		timeout:'3000',
		exp:{
			start:"",
			end:"",
			condition:""
		},
		display:{
			lang:['TH','GB'],
			exID:['XXXX','BBBB'],
			pageCode:['PURC','CONF']
		}		
	}
}

var runModal = function(req,res){

	let modal = document.getElementById('BoxModal');
	let span = document.getElementsByClassName("close")[0];
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}


	let myModal = setTimeout(m,n)

}

var modalHTML = function(name){
	
	return "<div class=\"box-modal-content\"> <div class=\"box-modal-header\"> <span class=\"close\">&times;</span> <h2>"+objModal[name].title+"</h2> </div> <div class=\"modal-body\"> <a target=\"_blank\" href=\" "+objModal[name].linkURL+" \"><img src=\" "+objModal[name].imageURL+" \" alt=""></a> </div> </div>";
}

