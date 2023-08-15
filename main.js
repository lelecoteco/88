
var canvas = new fabric.canvas('myCanvas');

ball_y=0;
ball_X=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.image.fromURL("golf-h.png", function(img) {
	hole_obj = img;
	hole_obj.scalewidth(50);
	hole_obj.scaleheight(50);
	hole_obj.set({
    top:hole_y,
	left:hole_x
	});
	canvas.add(hole_obj);
});
newImage();
	}



function newImage()
{
	fabric.image.fromURL("ball.png", function(img) {
		ball = img;
		ball_obj.scalewidth(50);
		ball_obj.scaleheight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
	});
	newImage();
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_X==hole_x)&&(ball_y)){
		canvas.remove(ball_obj)
	}
	document.getElementById("hd3").innerHTML="VÔCE ATINGIU SEU OBJETIVO!!!";
	document.getElementById("myCanvas").style.borderColor="red"
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=450)
	{
		ball_y = ball_y+block_image_height;
		console.log("altura da imagen do bloco t = "+ block_image_height);
		console.log("quando a tecla direcional cima for precionada, x ="+ball_X+", y = "+ ball_y);
		canvas.remove(ball_obj);
		new_image();
		
	}
	}
	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y+block_image_height;
			console.log("altura da imagen do bloco t = "+ block_image_height);
			console.log("quando a tecla direcional baixo for precionada, x ="+ball_X+", y = "+ ball_y);
			canvas.remove(ball_obj);
			new_image();
			
		}

	}

	function left()
	{
		if(ball_X >5)
		{
			if(ball_y <=450)
			
				ball_y = ball_y+block_image_height;
				console.log("altura da imagen do bloco t = "+ block_image_height);
				console.log("quando a tecla direcional esquerda for precionada, x ="+ball_X+", y = "+ ball_y);
				canvas.remove(ball_obj);
				new_image();
				
			
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			if(ball_y <=450)
			{
				ball_y = ball_y+block_image_height;
				console.log("altura da imagen do bloco t = "+ block_image_height);
				console.log("quando a tecla direcional direita for precionada, x ="+ball_X+", y = "+ ball_y);
				canvas.remove(ball_obj);
				new_image();
				
			}
		}
	}
	
}

