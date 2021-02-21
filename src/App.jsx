import React, { Component } from "react";
import "./App.css";
import Display from "./component/Display";
import Button from "./component/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  //함수 선언시 arrow function을 쓰면 this가 확실히 결정이돼서 bind안해도됨
  onClickHandler = (flag) => {
    //this.state.number++ 이렇게 쓰면 안되는 이유가
    //state값을 직접 접근해서 변경하면 state값의 갱신유무를 알 방법이 없기때문에 초기값에만 머물러있는다
    // 따라서 setState라는 지정된 메서드를 이용해서 변경해줘야 갱신유무를 알 수 있다.
    this.setState({
      number: this.state.number + flag,
    });
  };

  render() {
    return (
      <div className="container has-text-centerd">
        <Display value={this.state.number} />
        <Button clickHandler={() => this.onClickHandler(1)}>증가버튼</Button>
        <Button clickHandler={() => this.onClickHandler(-1)}>감소버튼</Button>

        {/*
        <button onClick={() => this.onClickHandler(1)}>증가버튼</button>
        <button onClick={() => this.onClickHandler(-1)}>증가버튼</button>
         */}
      </div>
    );
  }
}

export default App;
