canvas=document.getElementById("myCanvas");
document.getElementById("myCanvas").style.overflow="hidden";
ctx=canvas.getContext("2d");



c1_width=120;
c1_height=70;

c1_xpos=10;
c1_ypos=10;
c1_img="https://i.postimg.cc/9rqYz9HM/car1.png";

c2_width=120;
c2_height=70;

c2_xpos=10;
c2_ypos=100;
c2_img="https://i.postimg.cc/tnnW1Kff/car2.png";

var background_image="racing track image.jpg";
function add(){
Bg=new Image();
Bg.onload=upload_background;
Bg.src=background_image;

car1 =new Image();
car1.onload=upload_car1;
car1.src=c1_img;

car2 =new Image();
car2.onload=upload_car2;
car2.src=c2_img;
}



function upload_background(){
ctx.drawImage(Bg,0,0,canvas.width,canvas.height);
}

function upload_car1(){
ctx.drawImage(car1,c1_xpos,c1_ypos,c1_width,c1_height);
}

function upload_car2(){
ctx.drawImage(car2,c2_xpos,c2_ypos,c2_width,c2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;

if(key_pressed=='37'){
c1_Left();}

else if(key_pressed=='38'){
c1_Up();
}

else if(key_pressed=='39'){
c1_Right();
}


else if(key_pressed=='40'){
c1_Down();
}

if(key_pressed=='65'){
    c2_Left();}
    
    else if(key_pressed=='87'){
    c2_Up();
    }
    
    else if(key_pressed=='68'){
    c2_Right();
    }
    
    
    else if(key_pressed=='83'){
    c2_Down();
    }

if(c1_xpos>700){
    document.getElementById("game_status").innerHTML="white car won";
    }

    else if(c2_xpos>700){
        document.getElementById("game_status").innerHTML="green car won";
        }
    }

function  c1_Left(){
if(c1_xpos>=0){
    c1_xpos=c1_xpos-10;
upload_background();
upload_car1();
upload_car2();
}
}

function c1_Right(){
if(c1_xpos<=700){
    c1_xpos=c1_xpos+10;
    upload_background();
    upload_car1();
upload_car2();
    }
    }

    function c1_Up(){
        if(c1_ypos>=0){
            c1_ypos=c1_ypos-10;
        upload_background();
        upload_car1();
upload_car2();
        }
        }

        function c1_Down(){
            if(c1_ypos<=500){
            c1_ypos=c1_ypos+10;
            upload_background();
            upload_car1();
upload_car2();
            }
            }


            
            
            function  c2_Left(){
                if(c2_xpos>=0){
                    c2_xpos=c2_xpos-10;
                upload_background();
                upload_car1();
                upload_car2();
                }
                }
                
                function c2_Right(){
                if(c2_xpos<=700){
                    c2_xpos=c2_xpos+10;
                    upload_background();
                    upload_car1();
                upload_car2();
                    }
                    }
                
                    function c2_Up(){
                        if(c2_ypos>=0){
                            c2_ypos=c2_ypos-10;
                        upload_background();
                        upload_car1();
                upload_car2();
                        }
                        }
                
                        function c2_Down(){
                            if(c2_ypos<=500){
                            c2_ypos=c2_ypos+10;
                            upload_background();
                            upload_car1();
                upload_car2();
                            }
                            }

                            
            