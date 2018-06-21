$(document).ready(()=>{
	$('#getData').click(()=>{
		
		getallData();
	})
	
})

let getallData =()=>{
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'http://api.open-notify.org/astros.json',
		success:(data)=>{
			console.log(data)
			let allPeople = data.people;
			for(person of allPeople) {
				let tempRow = `<div class="row">
				                  <div class="col">${person.name}</div>
				                   <div class="col">${person.craft}</div>
				                   </div>`

				$('#showData').append(tempRow)                  
			}

		},
		error:(data)=>{
			alert("Some error occured")

		},
		beforeSend:()=>{
			alert("Fetching the data...")
			$('.progress-bar').css("display","block")

		},
		complete:()=>{
			alert("Fetched successfully")
			$('.progress-bar').attr("aria-valuenow",100)


		}


})

}

