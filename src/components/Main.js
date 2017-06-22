require('normalize.css/normalize.css');
require('styles/App.css');
var imageDatas = require('../data/imageData.json');

function genImgUrl(imageDataArr){
  for(var i=0; i<imageDataArr.length; i++){
    var singleImg = imageDataArr[i];
    singleImg.imgUrl = require('../images/' + singleImg.filename);
    imageDataArr[i] = singleImg;
  }
  return imageDataArr;
}

var imageDatas = genImgUrl(imageDatas);
console.log(imageDatas)

import React from 'react';



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
