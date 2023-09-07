'use client'
import axios from "axios"
import { error } from "console"
import { useEffect, useState } from "react"

const KakaoCallback = () => {
    const [userInfo, setUserInfo] = useState({
        nickname: ""
    })
    useEffect(() => {
        
        const params= new URL(document.location.toString()).searchParams
        const code = params.get('code')

        const param: any = {
            grant_type: 'authorization_code',
            client_id: '7e7b63658cacaa73e2a412dcd713bb8a',
            redirect_uri: 'http://localhost:3000/kakaoRedirect',
            code: code,
        }
        // console.log('param ::', param)
        const config = {
            headers: {
                'Authorization': 'Bearer ',
                'Content-type': 'application/x-www-form-urlencodedcharset=utf-8'
            }
        }
        // console.log('config ::', config)
        const queryString = Object.keys(param).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(param[key])).join('&')
        console.log('queryString ::', queryString+ ', {}, { headers: { "Content-type": "application/x-www-form-urlencodedcharset=utf-8" } }')
        console.log('test ::', queryString, config)
        // access_token 발급받기
        axios.post('https://kauth.kakao.com/oauth/token?' + queryString, config)
        .then((response : any) => {
            console.log(response.data)
            config.headers.Authorization += response.data.access_token
            console.log('config :: ',config)
          
            axios.post('https://kapi.kakao.com/v2/user/me', {}, config)
            .then((res) => {
                console.log('개인 정보 확인 ', res.data.properties.nickname)
                const nickname = res.data.properties.nickname
                setUserInfo({nickname})
                console.log('userinfo ::', userInfo)
            })
        })
        .catch(error => {
            console.error(error)
        })
        console.log()
        
    }, [])
    // userInfo 출력
    useEffect(() => {
        console.log('userinfo ::', userInfo)
    }, [])
    return(
        <>
        <div>로그인 되었습니다. {userInfo.nickname} 님</div>
        
        </>
    )
}
export default KakaoCallback