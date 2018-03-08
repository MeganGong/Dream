import React from 'react';
import { render } from 'react-dom';


class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '../../../CV_Mégane.pdf',
    };
  }
  
  render() {
    const  data = this.state.data;

    return (
        <div className="container">
          <object data={data} type="application/pdf" className="pdf-resume"></object>
        </div>
    );
  }
}

export default Resume;
