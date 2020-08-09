		// account
		function checkAcc(){
			var name = document.forms["regis_form"]["name"].value;
			var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
			var checkForSpecialChar = function(string){
				for(i = 0; i < specialChars.length;i++){
					if(string.indexOf(specialChars[i]) > -1 ){
					    return true;
					}
				}
				return false;
			}
			if ( name.length <5 || name.length>34 || checkForSpecialChar(name)) {
				document.forms["regis_form"]["name"].style.border = '1px solid red';
				document.forms["regis_form"]["name"].style.borderColor = 'red';
				document.getElementById("warn-acc").style.opacity = '1';
			}
			else {
				document.forms["regis_form"]["name"].style.border = 'inherit';
				document.forms["regis_form"]["name"].style.borderBottom = ' 3px solid white';
				document.getElementById("warn-acc").style.opacity = '0';
			}
		}
		function checkPhone(){
			var mobile = document.forms["regis_form"]["teleNumber"].value;
			if (mobile.length !=10 || isNaN(mobile)) {
				document.forms["regis_form"]["teleNumber"].style.border = '1px solid red';
				document.forms["regis_form"]["teleNumber"].style.borderColor = 'red';
				document.getElementById("warn-mobile").style.opacity = '1';
			}
			else {
				document.forms["regis_form"]["teleNumber"].style.border = 'inherit';
				document.forms["regis_form"]["teleNumber"].style.borderBottom = ' 3px solid white';
				document.getElementById("warn-mobile").style.opacity = '0';
			}
		}

		function checkEmail(){
			var email=document.forms["regis_form"]["email"].value;
			var aCong=email.indexOf("@");
			var dot = email.lastIndexOf(".");
			if ((aCong<1) || (dot<aCong+2) || (dot+2>email.length)) {
				document.forms["regis_form"]["email"].style.border = '1px solid red';
				document.forms["regis_form"]["email"].style.borderColor = 'red';
				document.getElementById("warn-email").style.opacity = '1';
			}
			else {
				document.forms["regis_form"]["email"].style.border = 'inherit';
				document.forms["regis_form"]["email"].style.borderBottom = ' 3px solid white';
				document.getElementById("warn-email").style.opacity = '0';
			}
		}
		function checkPwd(){
			var password = document.forms["regis_form"]["password"].value;
			if ( password.length <6) {
				document.forms["regis_form"]["password"].style.border = '1px solid red';
				document.forms["regis_form"]["password"].style.borderColor = 'red';
				document.getElementById("warn-pwd").style.opacity = '1';
			}
			else {
				document.forms["regis_form"]["password"].style.border = 'inherit';
				document.forms["regis_form"]["password"].style.borderBottom = ' 3px solid white';
				document.getElementById("warn-pwd").style.opacity = '0';
			}
		}
		function checkCfpwd(){
			var cfpassword = document.forms["regis_form"]["cfpassword"].value;
			var password = document.forms["regis_form"]["password"].value;
			if (cfpassword!==password) {
				document.forms["regis_form"]["cfpassword"].style.border = '1px solid red';
				document.forms["regis_form"]["cfpassword"].style.borderColor = 'red';
				document.getElementById("warn-cfpwd").style.opacity = '1';
			}
			else{
				document.forms["regis_form"]["cfpassword"].style.border = 'inherit';
				document.forms["regis_form"]["cfpassword"].style.borderBottom = ' 3px solid white';
				document.getElementById("warn-cfpwd").style.opacity = '0';
			}


		}



		function validateForm() {
			// acccount name
			var name = document.forms["regis_form"]["name"].value;
			if (name == "") 
			{
				alert("Tên tài khoản không được để trống");
				return false;
			}
			// telephone number
			var mobile = document.forms["regis_form"]["teleNumber"].value;
			var checkNum = isNaN(mobile);
			var number=mobile.length;
			if (mobile == "") {
			alert("Số điện thoại không được để trống");
			return false;
			}
			if (checkNum == true || number!=10) {
			alert("Số điện thoại phải để ở định dạng số và có độ dài 10 chữ số	");
			return false;
			}
		//Email 
			var email=document.forms["regis_form"]["email"].value;
			var aCong=email.indexOf("@");
			var dot = email.lastIndexOf(".");
			if (email == "") {
			alert("Email không được để trống");
			return false;
			}
			else if ((aCong<1) || (dot<aCong+2) || (dot+2>email.length)) {
			alert("Email bạn điền không chính xác");
			return false;
			}
		// password
		   var password = document.forms["regis_form"]["password"].value;
		   var len_pwd=password.length;
			if (password == "" ) 
			{
				alert("Mật khẩu không được để trống");
				return false;
			}
		// confirm password
			var cfpassword = document.forms["regis_form"]["cfpassword"].value;
			if (cfpassword == "") 
			{
				alert("Xác nhận mật khẩu không được để trống");
				return false;
			}
			if (cfpassword!==password) {
				alert("Xác nhận không trùng");
				return false;
			}
		}
	