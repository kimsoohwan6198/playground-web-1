// components/KakaoLoginButton.js
// import React from "react"
'use client'

import kakaoimg from '../../app/img/kakao_login.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function KakaoLoginButton() {
  const router = useRouter()  
  const handleLoginClick = () => {
    
    const CLIENT_ID = '7e7b63658cacaa73e2a412dcd713bb8a'
    const REDIRECT_URI = 'http://localhost:3000/kakaoRedirect'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    console.log('grantType ::', CLIENT_ID)
    console.log('REST_API_KEY ::', kakaoURL)
    router.push(kakaoURL)
  }

  return (
    <div onClick={handleLoginClick}>
      <Image
        src= {kakaoimg}
        alt='카카오로그인'
        width={255}
        height={35}
        style={{ margin: '0px 24px 16px 24px' }}
      />
    </div> 
  )
}
