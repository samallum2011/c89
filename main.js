var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
block_object="";
player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(140);

    player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});

}
function block_update(getimg){
    fabric.Image.fromURL(getimg,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
    
        block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    }
