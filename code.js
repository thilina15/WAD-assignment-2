			


			function add() 
            {
				if(isValidNumber('firstNumber')&&isValidNumber('secondNumber')){
					var x=Number(document.getElementById('firstNumber').value);
					var y=Number(document.getElementById('secondNumber').value);
					var r=document.getElementById('result');
					r.value=x+y;
				}
				
			}

			//---clear function for question 1
			function clean() {
				document.getElementById('firstNumber').value="";
				document.getElementById('secondNumber').value="";
				document.getElementById('result').value="";
				document.getElementById('error1').innerHTML="";
			}

			//----BMI calculate function for question 2
			function calculateBMI() {
				if(isPositiveValidNumber('height')&&isPositiveValidNumber('weight')){
					var x=Number(document.getElementById('height').value);
					var y=Number(document.getElementById('weight').value);
					var r=document.getElementById('result2');
					r.value=y/(x*x/10000);
				}
			}

			//--to check an item whether it is a valid number or not
			function isValidNumber(ID) {
				var x=document.getElementById(ID).value;
				
				if(isNaN(x)){
					return false;
				}
				else{
					return true;
				}
			}

			//te check given IDs' input value is grater than 0 number or not
			function isPositiveValidNumber(ID) {
				var a=document.getElementById(ID).value;
				
				if(isValidNumber(ID)){
					var number=Number(a);
					
					if(number>0){
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}

			//---------show and hide an error message acording to given boolean value
			function errorHanddle(bol,errorID) {

				var errorPoint=document.getElementById(errorID);
				
				if(bol){
					errorPoint.innerHTML="";
				}
				else{
					errorPoint.innerHTML="please enter valid inputs";
				}
			}

			//-----------------------------------password validation in question 4
			function checkValidate() {
				var capital=document.getElementById('charAlpCap');
				var simple=document.getElementById('charAlp');
				var num=document.getElementById('numbers2');
				var spec=document.getElementById('special3');
				var chars=document.getElementById('char15');

				var input=document.getElementById('pwd');

				//4 simple english letters
				if(input.value.match(/[a-z]/g).length>=4){
					simple.style.color="green";
				}else{
					simple.style.color="red";
				}

				//4 capital english letters
				if(input.value.match(/[A-Z]/g).length>=4){
					capital.style.color="green";
				}else{
					capital.style.color="red";
				}

				//2 numbers
				if(input.value.match(/[0-9]/g).length>=2){
					num.style.color="green";
				}else{
					num.style.color="red";
				}

				//special characters
				if(input.value.match(/[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/g).length>=3){
					spec.style.color="green";
				}else{
					spec.style.color="red";
				}

				//15 length validation
				if(input.value.length>=15){
					chars.style.color="green";
				}else{
					chars.style.color="red";
				}

			}

			//------------------------------------save and load local stroge in question 5
			function save(name) {
				
				var n=document.getElementById(name).value;
				localStorage.setItem("savedName", n);
			}

			function load(name) {
				document.getElementById(name).value=localStorage.getItem("savedName");
			}


			//------------------------------------save and load in question 6
			function saveColor(color) {
				localStorage.setItem("savedColor", color);
			}

			function loadColor() {
				document.getElementById('colorBox').value=localStorage.getItem("savedColor");
				document.getElementById('colorBox').style.backgroundColor=localStorage.getItem("savedColor");
			}

			function changeColor() {
				
				var colorB=document.getElementById("colorBox");
				var color=colorB.value;
				
				
				switch(color){
					case "blue":
						colorB.value="yellow";
						saveColor("yellow");
						colorB.style.backgroundColor="yellow";
						break;
					case "yellow":
						colorB.value="red";
						saveColor("red");
						colorB.style.backgroundColor="red";
						break;
					case "red":
						colorB.value="green";
						saveColor("green");
						colorB.style.backgroundColor="green";
						break;
					case "green":
						colorB.value="blue";
						saveColor("blue");
						colorB.style.backgroundColor="blue";
						break;
					default:
						colorB.value="red";
						saveColor("blue");
						colorB.style.backgroundColor="red";
						break;
				}
			}


			//call api function-------------------------question 7
			function report() {
				fetch ('https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ae4fe06579a79364db818382d52b17be')
            .then(response => response.json())
            .then(data => {
                var tempval = data ['main']['temp']-273.15;

                document.getElementById("weather").innerHTML = (tempval).toFixed(2);
            })

            .catch (err => alert("error"));
			}