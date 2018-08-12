import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

// class SingleTodo extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <li>
//         {this.props.todo}
//         <button onClick={this.props.delete}>X</button>
//       </li>
//     );
//   }
// }

const SingleTodo = props => {
  return (
    <li className="collection-item">
      <div>
        {props.todo}
        <a className="secondary-content" onClick={props.delete}>
          <i className="material-icons red-text">close</i>
        </a>
      </div>
    </li>
  );
};
export default SingleTodo;
