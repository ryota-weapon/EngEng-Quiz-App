import './App.css';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import * as Pages from './pages/index.js';

import {auth} from "./firebase.js";
import {useAuthState} from "react-firebase-hooks/auth"; 


import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const modes =  ["easy", "medium", "hard"];
  const [user] = useAuthState(auth);

  return (
      <div className="App">
          <div id='boxForBg'>
            <Header />
          
            <Routes>
                {modes.map((title,id) => (
                  <Route path={`/categories/${title}`} element={<Pages.QuizPage title={title}  key = {id} />} />  
                  ))}
                  <Route path="/" element={user? <Pages.Home /> : <Pages.Landing />}/>
                  <Route path="/home" element={<Pages.Home/>} />
                  <Route path="/method" element={<Pages.MethodPage/>} />
                  <Route path="/author" element={<Pages.AuthorPage />} />
                  <Route path="/self-learning" element={<Pages.SelfLearningPage />} />
                  <Route path="/online-battle" element={<Pages.BattlePage />} />
                  <Route path="*" element={<Pages.ErrorPage />} />
                  {/* ログインしていないユーザーはサインインページに飛ばしたいんだけど、user?を毎回書かなきゃいけないの？ */}
                  {/* signoutボタンを押したときにhomeに戻るようにしたけど、本質的じゃないか */}
            </Routes>
          </div>

          <Footer />
    </div>
  );
}

export default App;
