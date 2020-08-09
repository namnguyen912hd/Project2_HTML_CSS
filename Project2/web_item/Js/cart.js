var tmpbill=(parseInt(document.getElementById('totalmoney1').innerHTML)
			+parseInt(document.getElementById('totalmoney2').innerHTML)
			+parseInt(document.getElementById('totalmoney3').innerHTML)
			+parseInt(document.getElementById('totalmoney4').innerHTML));

function deleted(id,totalmoney){
	document.getElementById(id).style.display="none";
	tmpbill=(tmpbill-parseInt(document.getElementById(totalmoney).innerHTML))
	document.getElementById('tmpBill').innerHTML=tmpbill+".000";
	document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
}
function add(num,subb,unitpricee,totalmoney){
	var count = parseInt(document.getElementById(num).value);
	count+=1;
	document.getElementById(num).value=count.toString();
	var unitprice=parseInt(document.getElementById(unitpricee).innerHTML.substring(0, 2));
	var total=count*unitprice;
	document.getElementById(totalmoney).innerHTML=(total+".000");
	tmpbill=(tmpbill+unitprice);
	document.getElementById('tmpBill').innerHTML=tmpbill+".000";
	document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
	if (parseInt(document.getElementById(num).value)>1) {
		document.getElementById(subb).disabled=false;
	}
}
function sub(num,subb,unitpricee,totalmoney){
	var count = parseInt(document.getElementById(num).value);
	count-=1;
	document.getElementById(num).value=count.toString();
	var unitprice=parseInt(document.getElementById(unitpricee).innerHTML);
	var total=count*unitprice;
	document.getElementById(totalmoney).innerHTML=(total+".000");
	tmpbill=(tmpbill-unitprice);
	document.getElementById('tmpBill').innerHTML=tmpbill+".000";
	document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
	if (parseInt(document.getElementById(num).value)<=1) {
		document.getElementById(subb).disabled=true;
	}
	
}
function check(){
	if (document.getElementById("checkall").checked == false) {
		for (var i = 0; i < 4; i++) {
			document.getElementsByName("select")[i].checked=false;

		}	
		document.getElementById('tmpBill').innerHTML=0;
		document.getElementById('totalBill').innerHTML=0;
	}
	else {
		for (var i = 0; i < 4; i++) {
			document.getElementsByName("select")[i].checked=true;
		}
		document.getElementById('tmpBill').innerHTML=tmpbill+".000";
		document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
	}
}

function checkProduct(check,add,sub,totalmoney){
	if (document.getElementById(check).checked == false) {
		document.getElementById("checkall").checked = false;
		document.getElementById(add).disabled=true;
		document.getElementById(sub).disabled=true;
		tmpbill=(tmpbill-parseInt(document.getElementById(totalmoney).innerHTML));
		document.getElementById('tmpBill').innerHTML=tmpbill+".000";
		document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
		//tmpbill=(tmpbill+parseInt(document.getElementById(totalmoney).innerHTML));
	}
	else {
		tmpbill=(tmpbill+parseInt(document.getElementById(totalmoney).innerHTML));
		//document.getElementById("checkall").checked = true;
		document.getElementById(add).disabled=false;
		document.getElementById(sub).disabled=false;
		document.getElementById('tmpBill').innerHTML=tmpbill+".000";
		document.getElementById('totalBill').innerHTML=(tmpbill+17)+".000";
	}
}
