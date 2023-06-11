import React from 'react';
import { useLocation } from "react-router-dom"

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.data}</span>;
    } else {
      return null;
    }
  }
}


export default Detail;
