console.log("In here");

function changeCSS(index) {

  console.log("Clicked with:", index);

  var stylesheetContainer = document.getElementById('stylesheetContainer');
  stylesheetContainer.removeChild(stylesheetContainer.children[0]);


  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");

  switch (index) {
    case 1:
      newlink.setAttribute("href", './css/style1.css');
      break;

    case 2:
      newlink.setAttribute("href", './css/style2.css');
      break;

    default:
      newlink.setAttribute("href", './css/style1.css');
  }

  console.log(newlink);
  stylesheetContainer.appendChild(newlink);


}
