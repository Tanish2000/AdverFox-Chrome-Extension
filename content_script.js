//Removiong White Spaces with classes
var classes_white_space = [
  "adsbygoogle",
  "_ap_apex_ad",
  "ads",
  "adsbygoogle adslot_1",
  "ad",
  "ezoic-ad ezoic-adl",
];

for (var ele of classes_white_space) {
  rm_class_space(ele);
}

// Function for removing White Spaces classes
function rm_class_space(ele) {
  window.addEventListener("load", () => {
    var white_spaces = document.getElementsByClassName(ele);
    for (var i = 0; i < white_spaces.length; i++) {
      white_spaces[i].style.display = 'none';
      white_spaces[i].removeAttribute("style");
      console.log("Ad blocked by AdverFox");
    }
  });
}

//Removing white spaces with IDs
var IDs_white_spaces = [
  "AP_G4GR_"
]

for (var ele of IDs_white_spaces) {
  rm_id_spaces(ele)
}


//Function for removing white spaces Ids
function rm_id_spaces(ele) {
  window.addEventListener("load", () => {
    var white_spaces = document.getElementsByTagName('div');
    var list_ads =[]
    for (var i = 0; i < white_spaces.length; i++) {
      // console.log(white_spaces[i].id)
    }
  });

} 
