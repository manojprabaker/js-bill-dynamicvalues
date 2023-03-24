
let tip=document.getElementById("tip");


tip.addEventListener("input",getTip);
function getTip() {
	let bill=parseInt(document.getElementById("bill").value);
	let tips=parseInt(document.getElementById("tip").value);

	let tipsAmount=(tips*bill/100);
	document.getElementById("tip-amount").value=tipsAmount;
	let totalAmount=bill+tipsAmount;
	document.getElementById("total-amount").value=`₹${totalAmount}`;
	document.getElementById("final-rupees").innerHTML=`₹${totalAmount}`;
}


