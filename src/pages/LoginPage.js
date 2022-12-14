// pages/LoginPage.js
import React from "react";
// object 안에 있는 내용을 query string 형태로 변환하기 위해
import qs from "query-string";

const LoginPage = ()=>{
    //formData 는 현재 state 값 (object)
    //setFormData 는 formData 를 수정할때 사용하는 함수
    const [formData, setFormData]=React.useState({
        id:"",
        pwd:""
    });

    //input 요소의 value 값이 변경될때 마다 호출되는 함수
    const handleChange = (e)=>{
        //이벤트가 일어난 input 요소의 name 속성의 value 읽어오기("id" or "pwd")
        const name = e.target.name;
        //이벤트가 일어난 요소에 입력한 value 값
        const value = encodeURIComponent(e.target.value);
        setFormData({
            ...formData,
            [name]:value 
        });
    }

    //폼에 submit 이벤트가 일어났을때 호출되는 함수
    const handleSubmit = (e)=>{
        //폼 제출 막기
        e.preventDefault();
        //페이지 전환 없이 서버에 post 방식으로 id,pwd 전송하고 응답받기
        fetch("http://localhost:8888/Step04_Final/users/ajax_login.jsp", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: qs.stringify(formData) //입력한 내용을 query 문자열로 변경해서 요청의 body 로 전달한다.
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.isValid){
                alert("로그인 되었습니다.");
            }else{
                alert("아이디 혹은 비밀번호가 틀려요!");
            }
        });
    }
    
    return (
        <div className="container">
            <h3>로그인 폼 입니다.</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="id" placeholder="아이디 입력..."/>
                <input type="text" onChange={handleChange} name="pwd" placeholder="비밀번호 입력..."/>
                <button type="submit">로그인</button>
            </form>
            {/* object 안에 있는 내용을 문자열화 시켜서 출력해 보기 */}
            <p>{JSON.stringify(formData)}</p>
            <p>{qs.stringify(formData)}</p>
        </div>
    );
}

export default LoginPage;