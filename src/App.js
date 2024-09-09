
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="container">
      <h1>오늘 뭐먹었지?🍜</h1>
      <Memo></Memo>
    </div>
  );
}

function Memo(props) {
  let [input1, setInput1] = useState('');
  let [input2, setInput2] = useState('');
  let [input3, setInput3] = useState('');
  let [btn, setBtn] = useState('');
  return (
    <div className="memo-container">
    <div className={'memo '+btn}>
      <div className="memo-box">
        <p className="memo-tdg">🍚탄수화물🍚</p>
        <input className="memo-input" type="text" placeholder="오늘 먹은 탄수화물을 적어주세요!" onChange={(e) =>
          {
            setInput1(e.target.value);
          }
        }></input>
      </div>
      <div className="memo-box">
        <p className="memo-tdg">🥩단백질🥩</p>
        <input className="memo-input" type="text" placeholder="오늘 먹은 단백질을 적어주세요!" onChange={(e) => 
          {
            setInput2(e.target.value);
          }
        }></input>
      </div>
      <div className="memo-box">
        <p className="memo-tdg">🧀지방🧀</p>
        <input className="memo-input" type="text" placeholder="오늘 먹은 지방을 적어주세요!" onChange={(e) => 
          {
            setInput3(e.target.value);
          }
        }></input>
      </div>

      <p className="memo-check">▼ 아래 버튼을 눌러 오늘 식단의 점수를 확인해보세요! </p>
      <button className="memo-check-btn" onClick={() => {
        if (input1 == '' && input2 == '' && input3 == '') {
          alert("아무것도 입력하지 않았어요.");
        }
        else {
          setBtn('memo-check-btnEvent');
        }
      }}>식단 점수 확인</button>
    </div>
    <div className={'memo '+btn}>
      <Letter input1={input1} input2={input2} input3={input3}></Letter>
    </div>
    </div>
  )
}

function Letter(props) {

  let a = props.input1.split(',').length;
  let b = props.input2.split(',').length;
  let c = props.input3.split(',').length;
  let letter1 = '';
  let letter2 = '';
  let letter3 = '';
  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  if (a >= 3) {
    letter1 = "잘 드셨네요!😋";
    score1 = 30;
  }
  else if (a < 3) {
    letter1 = "부족해요.😫";
    score1 = 0;
  }
  if (b >= 4) {
    letter2 = "잘 드셨네요!😋";
    score2 = 40;
  }
  else if (b < 4) {
    letter2 = "부족해요.😫";
    score2 = 0;
  }
  if (c >= 3) {
    letter3 = "잘 드셨네요!😋";
    score3 = 30;
  }
  else if (c < 3) {
    letter3 = "부족해요😫";
    score3 = 0;
  }
  // 총 합계 --------
  let sum = score1+score2+score3;

  return (
    <div>
      <div className="letter-tdg">
        <p><strong>🍚 탄수화물 :</strong> {props.input1}</p>
        <p><strong>🥩 단백질 :</strong> {props.input2}</p>
        <p><strong>🧀 지방 :</strong> {props.input3}</p>
      </div>
      <hr className="letter-hr"></hr>
      <div className="letter-a">
        <p><strong>탄수화물은</strong> {letter1}</p>
        <p><strong>단백질은</strong> {letter2}</p>
        <p><strong>지방은</strong> {letter3}</p>
      </div>
      
      <div>
        <p className="letter-sum">총점은 <strong>{sum}점</strong> 입니다.</p>
      </div>
      
      
    </div>
  )
}
export default App;
