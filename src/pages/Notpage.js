import React from 'react'
import { NavLink } from 'react-router-dom'

function Notpage() {
    return (
        <div>
            <p className='text-7xl text-center font-bold'>404 Not Found</p>
            <p>페이지를 찾을 수 없습니다.</p>
            <NavLink to="/">메인으로 바로가기</NavLink>
        </div>
    )
}

export default Notpage