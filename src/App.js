import { NavLink, Route, withRouter } from "react-router-dom";
import { Home, Study, Game, Buy, login } from "./pages";

function App({location, match, history}) {

  // active 되었을때 어떤 css 를 적용할지 미리 정한다음 적용시킬수 있다.
  const activeStyle={
    color:"red",
    fontWeight:"bold"
  };

  return (
    <div className="App">
      <h1>React Router</h1>
      <button onClick={()=>{
        //함수의 인자로 전달받은 history 객체의 push 함수를 이용해서 이동할수 있다.
        history.push("/study");
      }}>공부 하러 가기</button>
      
      <ul>
        <li><NavLink activeStyle={activeStyle} to="/">home</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/study">study</NavLink></li>
        
        <li><NavLink activeStyle={activeStyle} to="/game">game 홈</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/game/starcraft">game starcraft</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/game/mario">game mario</NavLink></li>

        <li><NavLink activeStyle={activeStyle} to="/buy?code=1&name=handphone">1번 상품구매</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/buy?code=2&name=water">2번 상품구매</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/buy?code=3&name=coffee">3번 상품구매</NavLink></li>

        <li><NavLink activeStyle={activeStyle} to="/login">로그인</NavLink></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route exact path="/study" component={Study}/>
      <Route exact path="/game" component={Game}/>
      {/* name 이라는 이름의 경로 파라미터를 읽을수 있도록 설정 */}
      <Route path="/game/:name" component={Game}/>
      <Route path="/buy" component={Buy}/>
      <Route path="/login" component={login}/>
    </div>
  );
}

//withRouter() 함수를 호출해서 export 해주면 Router 에 관련된
//props 가 이 컴포넌트에 전달된다. 
export default withRouter(App);