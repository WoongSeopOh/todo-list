import React from 'react';
// 개별 컴포넌트에 스타일을 적용하는 것이 아니라 글로벌 스타일을 추가함
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList/>
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;