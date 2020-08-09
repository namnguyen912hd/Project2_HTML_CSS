function inserted(){
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('insert').style.opacity='1';
	document.getElementById('insert').style.visibility = 'visible';
	document.getElementById('insert').style.transform ='translate(-50%,-50%) rotateX(10deg)';
}
function back(){
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('insert').style.opacity='0';
	document.getElementById('insert').style.visibility = 'hidden';
	document.getElementById('insert').style.transform ='translate(-50%,-50%) rotateX(30deg)';
}
function reset () {
	document.getElementById('code').value="";
	document.getElementById('name').value="";
	document.getElementById('price').value="";
	document.getElementById('descript').value="";
	document.getElementById("unitCode").value='';
}
function SaveInsert(){
	var table = document.getElementById("table1");
	var newRow = table.insertRow(table.length);
	var 	cell1 = newRow.insertCell(0);
	var 	cell2 = newRow.insertCell(1);
	var 	cell3 = newRow.insertCell(2);
	var 	cell4 = newRow.insertCell(3);
	var 	cell5 = newRow.insertCell(4);
	var 	cell6 = newRow.insertCell(5);	
	var e = document.getElementById("unitCode");
	//var value = e.options[e.selectedIndex].value;
	var text = e.options[e.selectedIndex].text;
	cell1.innerHTML=text;
	cell2.innerHTML=document.getElementById('code').value;
	cell3.innerHTML=document.getElementById('name').value;
	cell4.innerHTML=document.getElementById('price').value;
	cell5.innerHTML=document.getElementById('descript').value;
	cell6.innerHTML='<button><i class="fa fa-cogs" aria-hidden="true"></i></button> <button><i class="fa fa-trash" aria-hidden="true"></i></button>';
	alert('Thêm thành công');
	back();
}

// xóa
// 
function del( stt ){

	if (confirm('Bạn có chắc chắn muốn xóa không !')==true) {
		document.getElementById(stt).style.display  = 'none';
		alert('Xóa thành công !');
	}
	
}

// update
var rIndex, 
	table  = document.getElementById('table1');
function capnhap(){
	//var rIndex, table= document.getElementById('table1');
	for (var i = 1; i < table.rows.length; i++) {
		table.rows[i].onclick= function () {
			rIndex=this.rowIndex;
			var e = document.getElementById("maloai");
			e.options[e.selectedIndex].text=this.cells[0].innerHTML;
			document.getElementById('ma').value=this.cells[1].innerHTML;
			document.getElementById('ten').value=this.cells[2].innerHTML;
			document.getElementById('gia').value=this.cells[3].innerHTML;
			document.getElementById('mota').value=this.cells[4].innerHTML;
		}
	}
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('update').style.opacity='1';
	document.getElementById('update').style.visibility = 'visible';
	document.getElementById('update').style.transform ='translate(-50%,-50%) rotateX(10deg)';

}
function delUpdate(){
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('update').style.opacity='0';
	document.getElementById('update').style.visibility = 'hidden';
	document.getElementById('update').style.transform ='translate(-50%,-50%) rotateX(30deg)';
}
function update(){
	var e = document.getElementById("maloai");
	//var value = e.options[e.selectedIndex].value;
	var text = e.options[e.selectedIndex].text;
	table.rows[rIndex].cells[0].innerHTML=text;
	table.rows[rIndex].cells[1].innerHTML=document.getElementById('ma').value;;
	table.rows[rIndex].cells[2].innerHTML=document.getElementById('ten').value;;
	table.rows[rIndex].cells[3].innerHTML=document.getElementById('gia').value;;
	table.rows[rIndex].cells[4].innerHTML=document.getElementById('mota').value;
	alert("Cập nhập thành công !");
	delUpdate();
}


// ----------------------------------------validate
function i_checkCode(){
	var code=document.getElementById('code').value;
	code=code.toUpperCase();
	if (code.substr(0,2)!='MA' || isNaN(code.substr(2,3)) || code.length>5) 
	{
		document.getElementById('code').style.border='1px solid red';
		document.getElementById('e_code').style.display='block';
		document.getElementById('code').focus();
	}
	else {
		document.getElementById('code').style.border='1px solid black';
		document.getElementById('e_code').style.display='none';
	}
	document.getElementById('code').value=code.toUpperCase();
}
function i_checkName(){
	var name=document.getElementById('name').value;
	name=name.trim().replace(' ',''); 
	var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
	var checkForSpecialChar = function(string){
		for(i = 0; i < specialChars.length;i++){
			if(string.indexOf(specialChars[i]) > -1 ){
			    return true;
			}
		}
		return false;
	}
	var ckeckNumber=function(string){
		for (i=0 ; i<string.length ; i++) {
			if (isNaN(string[i])==false) {
				return true;
			}
		}
		return false;
	}
	if(checkForSpecialChar(name)  || ckeckNumber(name)){
		document.getElementById('name').style.border='1px solid red';
		document.getElementById('e_name').style.display='block';
		document.getElementById('name').focus();

	} 
	else {
		document.getElementById('name').style.border='1px solid black';
		document.getElementById('e_name').style.display='none';
	}
}
function i_checkPrice(){
	var gia = document.getElementById('price').value;
			if (gia<10000|| isNaN(gia)) {
				document.getElementById('price').style.border = '1px solid red';
				document.getElementById("e_price").style.display = 'block';
				document.getElementById('price').focus();
			}
			else {
				document.getElementById('price').style.border = '1px solid black';
				document.getElementById("e_price").style.display = 'none';
			}
}
function i_checkDescript(){
	var des=document.getElementById('descript').value;
	var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
	var checkForSpecialChar = function(string){
		for(i = 0; i < specialChars.length;i++){
			if(string.indexOf(specialChars[i]) > -1 ){
			    return true;
			}
		}
		return false;
	}
	if(checkForSpecialChar(des)  ){
		document.getElementById('descript').style.border='1px solid red';
		document.getElementById('e_descript').style.display='block';
		document.getElementById('descript').focus();

	} 
	else {
		document.getElementById('descript').style.border='1px solid black';
		document.getElementById('e_descript').style.display='none';
	}
}
function u_checkName(){
	var name=document.getElementById('ten').value;
	name=name.trim().replace(' ',''); 
	var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
	var checkForSpecialChar = function(string){
		for(i = 0; i < specialChars.length;i++){
			if(string.indexOf(specialChars[i]) > -1 ){
			    return true;
			}
		}
		return false;
	}
	var ckeckNumber=function(string){
		for (i=0 ; i<string.length ; i++) {
			if (isNaN(string[i])==false) {
				return true;
			}
		}
		return false;
	}
	if(checkForSpecialChar(name)  || ckeckNumber(name)){
		document.getElementById('ten').style.border='1px solid red';
		document.getElementById('u_name').style.display='block';
		document.getElementById('ten').focus();

	} 
	else {
		document.getElementById('ten').style.border='1px solid black';
		document.getElementById('u_name').style.display='none';
	}
}
function u_checkPrice(){
	var gia = document.getElementById('gia').value;
			if (gia<10000|| isNaN(gia)) {
				document.getElementById('gia').style.border = '1px solid red';
				document.getElementById("u_price").style.display = 'block';
				document.getElementById('gia').focus();
			}
			else {
				document.getElementById('gia').style.border = '1px solid black';
				document.getElementById("u_price").style.display = 'none';
			}
}
function u_checkDescript(){
	var des=document.getElementById('mota').value;
	var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
	var checkForSpecialChar = function(string){
		for(i = 0; i < specialChars.length;i++){
			if(string.indexOf(specialChars[i]) > -1 ){
			    return true;
			}
		}
		return false;
	}
	if(checkForSpecialChar(des)  ){
		document.getElementById('mota').style.border='1px solid red';
		document.getElementById('u_descript').style.display='block';
		document.getElementById('mota').focus();

	} 
	else {
		document.getElementById('mota').style.border='1px solid black';
		document.getElementById('u_descript').style.display='none';
	}
}