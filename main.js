canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

cat1_x= 10;
cat1_y=10;
cat1_width=100;
cat1_height=90;
cat1_img="bengal_cat-removebg-preview.png";


cat2_x= 10;
cat2_y=100;
cat2_width=150;
cat2_height=90;
cat2_img="tabby_cat-removebg-preview.png";

background_img="backround_img.jpg";
function add() {
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_img;

cat1_imgtag= new Image();
cat1_imgtag.onload=uploadcat1;
cat1_imgtag.src=cat1_img;

cat2_imgtag= new Image();
cat2_imgtag.onload=uploadcat1;
cat2_imgtag.src=cat2_img;


}
function uploadBackground(){
ctx.drawImage(background_imgtag,0,0, canvas.width, canvas.height);

}
function uploadcat1(){
    ctx.drawImage(cat1_imgtag,cat1_x, cat1_y,cat1_width, cat1_height);
}

function uploadcat2(){
    ctx.drawImage(cat2_imgtag,cat2_x, cat2_y,cat2_width, cat2_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode ;
    console.log (keypressed);
    if (keypressed=='38'){
        up1();
        console.log( "up");

    }
    if (keypressed=='40'){
        down1();
        console.log( "down ");
        
    }
    if (keypressed=='37'){
        left1();
        console.log( "left");
        
    }
    if (keypressed=='39'){
        right1();
        console.log( "right");
        
    }



    if (keypressed=='87'){
        up2();
        console.log( "w");

    }
    if (keypressed=='83'){
        down2();
        console.log( "s ");
        
    }
    if (keypressed=='65'){
        left2();
        console.log( "a");
        
    }
    if (keypressed=='68'){
        right2();
        console.log( "d");
        
    }

if (cat1_x> 700) {
    document.getElementById("win").innerHTML="BENGAL CAT WINNS THE RACE!!!!!!!!!!";
}

else if (cat2_x>700) {
    document.getElementById("win").innerHTML="TABBY CAT WINNS THE RACE!!!!!!!!!!!";
}

}
function up1() {
    if (cat1_y>=0) {
        cat1_y=cat1_y-10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }

}
function down1() 
{
    if (cat1_y<=500) {
        cat1_y=cat1_y+10;
        uploadBackground();
        uploadcat1();
        uploadcat2();

    }

}
function left1 () {
    if (cat1_x>=0) {
        cat1_x=cat1_x-10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }
}
function right1 () {
    if(cat1_x<=700) {
        cat1_x=cat1_x+10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }
}


function up2() {
    if (cat2_y>=0) {
        cat2_y=cat2_y-10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }

}
function down2() 
{
    if (cat2_y<=500) {
        cat2_y=cat2_y+10;
        uploadBackground();
        uploadcat1();
        uploadcat2();

    }

}
function left2() {
    if (cat2_x>=0) {
        cat2_x=cat2_x-10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }
}
function right2() {
    if(cat2_x<=700) {
        cat2_x=cat2_x+10;
        uploadBackground();
        uploadcat1();
        uploadcat2();
    }
}


