var isbool=true;
		function showHidden(){
			if (isbool) {
				document.getElementById("password").setAttribute("type","text");
				isbool=false;
			}
			else {
				document.getElementById("password").setAttribute("type","password");
				isbool=true;
			}
		}
		function validateForm(){
			var acc = document.forms["login_form"]["account"].value;
			if (acc == "") 
			{
				alert("Tên tài khoản không được để trống");
				return false;
			}
			var pwd = document.forms["login_form"]["password"].value;
			if (pwd == "") {
			alert("Mật khẩu không được để trống");
			return false;
			}
		}
