import * as p from '../../../FireBase Holds the fuctions on the objects/PatOperation.js'
import * as d from '../../../FireBase Holds the fuctions on the objects/DocOperation.js'

 validateform.onclick= ()=> {
		const encrypt = text => {
	        	return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
		};

		const decrypt = data => {
		     return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
		};


		console.log(encrypt("Hello"));
		console.log(decrypt(encrypt("Hello")));
		var national = document.getElementById("nationalid").value;
		var password = document.getElementById("pass").value;;

		if (national == null || national == ""  ) {
			alert("please enter your national id");

		} else if (national.length<  14||national.length>  14) {
			alert("National Id must be  14 Numbers.");

		}else if (password.length < 6) {
			alert("Password must be at least 6 characters.");

		}
		else {

                console.log(national);
                console.log(password);

            p.Get_By_Pat_ID_AND_PASSWORD(national,password).then(pat=>{
                if(pat!=undefined){
					console.log(pat);
                    window.location.replace("http://localhost:8080/Patient/01?id="+encrypt(pat));
                }
            });

            d.Get_By_DOC_ID_AND_PASSWORD(national,password).then(doc=>{
                if(doc!=undefined){
					console.log(doc);
                    window.location.replace("http://localhost:8080/GHC%20Doctor%20side/?id="+encrypt(doc));
                }
            });
		}


	}  