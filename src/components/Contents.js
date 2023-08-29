import React, { useState } from 'react'

function Contents(props) {
  
    let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!", "EBER SMTOWN", "나이트 사파리 트램", "푸바오 사랑해", "이큐브스쿨 STEAM 클래스"]);
    let [desc, setDesc] = useState(["스페셜 이벤트", "스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터", "Let's SHINee LAND", "바오패밀리 패키지", "메이카트 (Make-KArt)"])
    
    let [good, setGood] = useState(1)
    
    function goodFun(){
      setGood(good+1)
    }
    function Change(){
      let copy = [...title];
      let copy2 = [...desc];
      copy[0] = "쌍둥이 아기판다77";
      setTitle(copy);
      setDesc(copy2);
      copy2[0] = "qdwcqwdcqwcqw";
    }
    
    let [ModalChk, setModalChk] = useState(false);
    function Modal(){
      // setModalChk(true)
      // if(ModalChk === false){
      //   setModalChk(true)
      // }else{
      //   setModalChk(false)
      // }
      (ModalChk === false ? setModalChk(true) : setModalChk(false))
      // ModalChk != setModalChk
    }
  return (
    <>
    <div className='content-item' onClick={Modal}>
        <img src="https://via.placeholder.com/320" alt='테스트' />
        <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
        <p>{desc[props.arrayNum]}</p>
        <p onClick={goodFun}>👍 {good}</p>
        <button onClick={Change}>수정</button>
        {/* window + . */}
      </div>
      {
       ( ModalChk === true ? <div className='window'></div> : null)
      //  ( ModalChk === true && <div className='window'></div>)
      }
      </>
  )
}

export default Contents