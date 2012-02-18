$(function(){
//for (i=0;i<=5;i++) {
	var the_path = 'images/';
	var randomNum = (Math.ceil(Math.random()*6))-1; /* Pick random number between 0 and 5 */
	var random_top = (Math.ceil(Math.random()*500)); 
	var random_left = (Math.ceil(Math.random()*1000)); 
	var sketches = ['eyeglass', 'can-opener','faucet', 'necklace-clasp', 'music-box', 'hanger-clip'];
	new_sketch = sketches[randomNum];
	img = '<img id="' + new_sketch + '" src="' + the_path + new_sketch  + '.png" style="position:absolute; top:' + random_top + 'px; left:' + random_left + 'px;" />';
	$('body').append(img);
	the_id = "#"+new_sketch;
	alert(the_id);
//	setTimeout(function(){moveIt(the_id)}, 1000);
	moveIt(the_id);
	alert('after timeout');



function moveIt(the_div){
	alert('inside moveit');
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
//}  //end for loop
});