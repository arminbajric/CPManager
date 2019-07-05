function setActive(id, iconId) {

  var nodes = document.getElementsByClassName('button');
  var icons = document.getElementsByClassName('icon')
  for (var i = 0; i < 4; i++) {
    nodes[i].className = nodes[i].className.replace(" active", "");
    if (icons[i].id == iconId) { icons[i].className = icons[i].className.replace(" hide", " show"); }
    else {
      icons[i].className = icons[i].className.replace(" show", " hide");
      console.log('pfffffffffffffffffffff')
    }

  }



  document.getElementById(id).className += " active";
  console.log("loadedddd")

}
function resolveCollapse(id) {
  var delayInMilliseconds = 600; 

  setTimeout(function() {
    document.getElementById(id).scrollIntoView();
  }, delayInMilliseconds);
 
}
function setSelected(id,classname){
  var nodes = document.getElementsByClassName(classname);
 console.log('uaaaaaaaaaaa')
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].className = nodes[i].className.replace(" active", "");
  }
document.getElementById(id).className+=" active";
}