import React from 'react';
import styled from 'styled-components';

const Btn = styled.button `
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color:white;
  background:transparent;
  `

const Button = ({classNm, children, clickHandler }) => (
    <div className="">
      <button className={classNm} onClick={clickHandler}>{children}</button>

    </div>
  );

export default Button;