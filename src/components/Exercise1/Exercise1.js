import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    // this should reduce currentImg by 1

    let thisCurrenImg = this.state.currentImg === 0 ? this.state.images.length - 1 : this.state.currentImg - 1
    this.setState({
      currentImg: thisCurrenImg
    })
  }
  shiftImageForward = () => {
    // shiftImageForward - this should increase currentImg by 1
    let thisCurrenImg = this.state.currentImg === this.state.images.length - 1 ? 0 : this.state.currentImg + 1
    this.setState({
      currentImg: thisCurrenImg
    })
    
  }

  render() {
    return (
      <div >
        {/* render two buttons with the classes "back" and "forward",
           and the image at index currentImg, in an img tag */}
           
           
           <button onClick={this.shiftImageForward}>next</button>.
           <img src={this.state.images[this.state.currentImg]}/>
           <button onClick={this.shiftImageBack}>previous</button>

      </div>
    );
  }
}

export default Exercise1;
