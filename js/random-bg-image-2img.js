$(function(){
var the_path = 'images/';
var randomNum1 = (Math.ceil(Math.random()*6))-1; /* Pick random number between 0 and 5 */
var randomNum2 = (Math.ceil(Math.random()*6))-1; 
var random_top1 = (Math.ceil(Math.random()*500)); 
var random_left1 = (Math.ceil(Math.random()*1000)); 
var random_top2 = (Math.ceil(Math.random()*500)); 
var random_left2 = (Math.ceil(Math.random()*1000));
var sketches = ['eyeglass', 'can-opener','faucet', 'necklace-clasp', 'music-box', 'hanger-clip'];
new_sketch1 = sketches[randomNum1];
new_sketch2 = sketches[randomNum2];
img1 = '<img id="' + new_sketch1 + '" src="' + the_path + new_sketch1  + '.png" style="position:absolute; top:' + random_top1 + 'px; left:' + random_left1 + 'px;" />';
img2 = '<img id="' + new_sketch2 + '" src="' + the_path + new_sketch2  + '.png" style="position:absolute; top:' + random_top2 + 'px; left:' + random_left2 + 'px;" />';
$('body').append(img1).append(img2);
the_id1 = "#"+new_sketch1;
the_id2 = "#"+new_sketch2;
for (i=0;i<=5;i++) {
	moveIt(the_id1);
	setTimeout(function(){moveIt(the_id2)}, 1000);
}


function moveIt(the_div){
	$(the_div).animate({
    opacity: 0,
  }, 2000, function() {
    // Animation complete.
  });
  $(the_div).animate({
    opacity: 1,
  }, 2000, function() {
    // Animation complete.
  });
};
});