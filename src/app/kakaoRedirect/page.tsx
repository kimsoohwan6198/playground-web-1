'use client'
import axios from "axios"
import { error } from "console"
import { useEffect } from "react"

const KakaoCallback = () => {
    useEffect(() => {
        const params= new URL(document.location.toString()).searchParams;
        const code = params.get('code');

        const REST_API_KEY = '7e7b63658cacaa73e2a412dcd713bb8a'
        const grantType = 'authorization_code'
        const REDIRECT_URI = 'http://localhost:3000/kakao'

        // axios.post(
        //     `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        //      {},
        //      { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
        //     ).then((res: any) => {
        //         console.log(res)
        //         const { access_token } = res.data;
        //     }
        // )

        const param: any = {
            grant_type: 'authorization_code',
            client_id: '7e7b63658cacaa73e2a412dcd713bb8a',
            redirect_uri: 'http://localhost:3000/kakao',
            code: code,
        }
        // console.log('param ::', param)

        const config = {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
        // console.log('config ::', config)

        const queryString = Object.keys(param).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(param[key])).join('&')
        console.log('queryString ::', queryString+ ', {}, { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }')
        console.log('test ::', queryString, {}, config)

        axios.post('https://kauth.kakao.com/oauth/token?' + queryString, {}, config).then()
              // access_token 발급받기
        
        
        
    }, [])
    
    return(
        <>
        <div>Kakao Redirect Page</div>
        </>
    )
}
export default KakaoCallback;