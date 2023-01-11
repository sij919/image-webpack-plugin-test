import React from 'react';
import './App.scss';
// 이미지 코드 추가
import img01 from './assets/images/png/img01.png';
import img02 from './assets/images/gif/img02.gif';
import img03 from './assets/images/jpg/img03.jpg';
import img04 from './assets/images/png/img04.png';
import img05 from './assets/images/gif/img05.gif';
import img06 from './assets/images/jpg/img06.jpg';
import img07 from './assets/images/png/img07.png';
import img08 from './assets/images/png/img08.png';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1> 이미지 최적화 테스트 - image-webpack-plugin </h1>
        {/* 이미지 코드 추가 */}
        <img src={img01} />
        <img src={img02} />
        <img src={img03} />
        <img src={img04} />
        <img src={img05} />
        <img src={img06} />
        <img src={img07} />
        <img src={img08} />
				{/* 이미지 코드 추가 */}
      </div>
    );
  }
}

export default App;