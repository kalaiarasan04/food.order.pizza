
// food order in callback function


let getbtn=document.getElementById("btn");

getbtn.addEventListener('click',ans);

function ans(){
	
	let name="chicken";

    let prices=230
	
	
	// setInterval
	
	
	
	// count=0;
	
	// let sum=setInterval((name,prices,ans)=>{
	
		// count++
		
		// if(count==1){
			
			// console.log("your food is pizza");
			
		// }
		
		// else if(count==3){
			
			// console.log("Preparing a food");
			
		// }
		
		// else if(count==5){
			
			// ans(name,prices)
			
		// }
		
		// else if(count==9){
			
			// clearInterval(sum)
			
			// console.log("food is delivery");
			
		// }
		
		
	// },1000,name,prices,ans)
	
	// function ans(name,prices){
		
	    // console.log("your food is chicken and food price is 250");
	
	// }
	
	
	
	function pizza(name,prices,foodprice){
		
		setTimeout(()=>{
		
		document.write("You are order a pizza");
		
	},1000)
		
		setTimeout(()=>{
		
		document.write("preparing  a pizza")
		
	},2000)
		
	    return foodprice(name,prices)	
		
	}
    pizza(name,prices,foodprice)
	
	function foodprice(foodprice){
	
	setTimeout(()=>{
		document.write(`your food is ${name} and food price is ${prices}`)
		
	
	},4000)
	
		setTimeout(()=>{
	   
	    document.write("your food is delivery");
	   
   },6000)
	
	}

}
