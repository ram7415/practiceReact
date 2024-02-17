import React from "react";
import "./App.css";
// //functional component
// function App() {
//   let firstVariable = 5;
//   // console.log(firstVariable);
//   firstVariable = 6;
//   // console.log(firstVariable);
//   const myFunction = () => {
//     // console.log("This is my function");
//     return true;
//   };
//   class student {
//     id;
//     name;
//     email;
//     rollNumber;

//     constructor(id, name, email, rollNumber) {
//       this.id = id;
//       this.name = name;
//       this.email = email;
//       this.rollNumber = rollNumber;
//     }
//     print() {
//       console.log("id", this.id);
//     }
//   }
//   class Moniter extends student {
//     batch;

//     constructor(batchtemp, id, name, email, rollNumber) {
//       super(id, name, email, rollNumber);
//       this.batch = batchtemp;
//     }
//     print() {
//       super.print();
//       console.log("batch" + this.batch);
//     }
//   }

//   let ravi = new Moniter("2-3pm", 124, "ravi", "ravi@gmail.com", 2212);
//   console.log("ravi:", ravi);
//   ravi.print();
//   const student1 = new student(123, "ram", "nkalkda@nksn", 3232);
//   student1.print();

//   let variable = <div>hello world again</div>;
//   // const myFunction1 = (variable) => {
//   //   console.log(variable);
//   //   console.log("this is my 2nd function");
//   //   if (variable()) {
//   //     console.log("the condition is true");
//   //   } else {
//   //     console.log("the condtion is false");
//   //   }
//   // };
//   // myFunction1(myFunction);
//   return (
//     <div>
//       hello there!!
//       <br />
//       {variable}
//     </div>
//   );
// }

//class component
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>List 4</li>
//           <li>List 5</li>
//           <li>List 6</li>
//         </ul>
//       </div>
//     );
//   }
// }
// const App = (props) => {
// console.log("Props:" props.color)
// console.log("Props:" props.size)
//   return (
//     <div style={{ backgroundColor: props.color }}>
//       this is app component<button onClick={props.clickEvent}>Click me</button>
//     </div>
//   );
// };
class App extends React.Component {
  state = {
    counter: 0,
    component: <ChildComponent />,
  };
  constructor(props) {
    super(props);
    console.log("contructer of App component");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidMount");
  }

  unmountChild = () => {
    this.setState({
      counter: this.state.counter,
      component: "this child component is gone/unmounted",
    });
  };
  render() {
    console.log(this.props.color);

    return (
      <div style={{ backgroundColor: this.props.color }}>
        hello<button onClick={this.props.clickEvent}>Click me</button>
        <br></br>
        Counter:{this.state.counter}
        <br />
        <button onClick={this.incrementCounter}>Increament button</button>
        -----------------this is my child component
        <br />
        {/* <ChildComponent /> */}
        {this.state.component}
        -------
        <br />
        <button onClick={this.unmountChild}>Unmount ChildComponent</button>
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  componentWillUnmount() {
    console.log("Unmounting Child Component");
  }

  render() {
    return <div>this is my child component</div>;
  }
}
export default App;
