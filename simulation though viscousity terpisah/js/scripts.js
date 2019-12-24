var canvas = document.createElement('canvas');
		
		canvas.id ="CursorLayer";
		canvas.width = 500;
		canvas.height = 400;
		canvas.style.zIndex = 8;
		canvas.style.position ="absolute";
		canvas.style.border = "1px solid";

		//sistem DOM model
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(canvas);

		cursorLayer = document.getElementById("CursorLayer");

		console.log(cursorLayer);

		//create element 2D on canvas
		var ctx=canvas.getContext('2d');

		var Xmin = 0;
		var Ymin = 0;
		var Xmax = 1;
		var Ymax = 2;
		var X,Y;
		var ball ={
			posisi: {x: canvas.width/4+55, y:canvas.height/4} ,//cm
			kecepatan: {x: 0, y:0} ,//m/s
			massa: 0.0016, //massa dalam kg var yang kepake 0.0016
			
			radius: 8, //1px = 1cm
			restitusi: 0,
			volume: 0.000002172 //m3 // var yang kepake 0.000002172
		}; 


		
	var VB,Fa,Fs,Ft,W,A,vterm,vy,st,t0=0,t1,t=0,g=9.81,rhob,deltat=1,x1,e,vtambahan;
	var j=20
	var u,du,ddt,vtotal,v0,a,v,Z,vtotal1;
	var t1;
	var divar;
	var arr =[],arr1 =[];
	var i=0,deltai=1;
	////



	////

	function make(){
		var VIS = document.getElementById("vis").value;
		var VIS1=parseFloat(VIS);
		var rho = document.getElementById("rho").value;
		var rho1=parseFloat(rho);
		
		var id= setInterval(looping,60); //belum pasti 1000/50
		
		function looping(){
			if(Y+ball.radius > canvas.height-20){
				clearInterval(id);
			}else if(vtotal>0){
				clearInterval(id);
			}else{
				function gerakbola(){
				//VOLUME BOLA
				
				VB=ball.volume //m3;
				//gaya apung
				//n = kg/m3*m3*m/s2
				Fa = rho1 * VB * g ;

				//gaya stokes
				//n= 6 *pi * Pas * r~m * 
				Fs = 6 * Math.PI * VIS1 * ball.radius *vterm/100;

				//gaya tarik
				W = ball.massa * g;

				Ftotal= ball.massa*a;

				Ftotal = W-Fa-Fs;

				var a1;
				a1 = Ftotal/ball.massa;


				Vt = (ball.massa/(6 * Math.PI * VIS1 * ball.radius/100))* (g-(rho1*g*VB/ball.massa));
				
				

				console.log("kecepatan TERMINAL = " + Vt);
				
				v0 = 0;

				vtambahan = (v0-Vt)*Math.pow(Math.E, (((-6 * Math.PI * VIS1 * (ball.radius/100)*t)/ball.massa)));

				console.log("kecepatan terminal bertambah: " + vtambahan);

				vtotal = Vt + vtambahan ;

				arr.push(vtotal);

				console.log("kecepatan terminal total: " + vtotal);
				console.log("array vtotal="+ arr);
				A=((-6 * Math.PI * VIS1 * ball.radius/100)/ball.massa)*t;
				//6*3.14*0.061*0.08/0.0016

				console.log("var a = "+ A);
				//-121032.99857220035
				e= Math.pow(Math.E, (A));

				// ((-6 * Math.PI * VIS * ball.radius*t)/ball.massa)

				console.log("var e = " + e);

				x1=1; // jarak awal

				//jarak untuk st 
				st1 = (Vt*t) + ((v0*t)-(Vt*(-ball.massa/(6*Math.PI * VIS1 * (ball.radius/100))*e)));

				

				console.log("var st1 = " + st1);				

				vtotal1 = vtotal;

				
				console.log("array v = " + arr);

				console.log("TAMPAN :" +vtotal1);

				calculate();
				function calculate(){

				Y =-((st1-Ymin)/(Ymax-Ymin))*ball.posisi.y + ball.posisi.y;
				console.log("y :" +Y);
				X =((x1-Xmin)/(Xmax-Xmin))*ball.posisi.x;
				
				}

				arr1.push(t);
				t+=deltat;
				console.log("t array= "+arr1);
			}
			
			console.log("T :" +arr1);
			gerakbola();
			//wadah();
			draw();
   			//cairan();
   		
   			//////////////////////////////////////////////////////
   			//grafik
   			//kecepatan terminal
   			var graph1={
			x: arr1,
			y: arr,
			mode: 'lines-makers',
			name: 'dots'
			};
			var data1 =[graph1];
			var gambar1= {title:"Data yang diperoleh"};
			Plotly.newPlot("area3", data1, gambar1,"");

			console.log("kecepatan terminal total: " + vtotal);

			//perbandingan jarak 
			var graph2={
			x: arr1,
			y: arr,
			mode: 'lines-makers',
			name: 'dots'
			};
			var data1 =[graph1];
			var gambar1= {title:"Data yang diperoleh"};
			Plotly.newPlot("area3", data1, gambar1,"");

			console.log("kecepatan terminal total: " + vtotal);
			
			//perbandingan 
			var graph1={
			x: arr1,
			y: arr,
			mode: 'lines-makers',
			name: 'dots'
			};
			var data1 =[graph1];
			var gambar1= {title:"Data yang diperoleh"};
			Plotly.newPlot("area3", data1, gambar1,"");

			console.log("kecepatan terminal total: " + vtotal);
			
			}
			}
			}
			console.log("waktu : " + arr1 );
			//////////////////////////////////////////////////////////////
