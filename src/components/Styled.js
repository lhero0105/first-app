import React from 'react'
import { styled } from 'styled-components'

const Style = styled.div`
background-color: orange;
font-size: 3rem;
/* ul{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
} */
`
const StyleUl = styled.div`
ul{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
`
// Styled 폴더에서 div를 가져온애를 변수로 지정



function Styled() {
    let Menu = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"];
    return (
        <Style>
            <StyleUl>
            <ul>
                {
                    Menu.map((el, i)=>{
                        return(
                            <li className='text-center' key={i}>{el}</li>
                            // map반복문 에서 key값을 적어주어야합니다
                            // 고유값 지정 key={i}
                        )
                    })
                }
            </ul>
            </StyleUl>
        </Style>
    )
}

export default Styled