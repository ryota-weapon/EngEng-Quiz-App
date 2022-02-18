import './App.css';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import * as Pages from './pages/index.js';

import {auth, db, } from "./firebase.js";
import {useAuthState} from "react-firebase-hooks/auth"; 


import Header from './components/Header';
import Footer from './components/Footer';

import {useState, useEffect} from "react";

function App() {
  
  const [user] = useAuthState(auth);
  
  const [categories, setCategories] = useState([]);
  useEffect( ()=>{
    const getCategories = async ()=>{
      let data = []
      await db.collection("categories").get().then(
        snapshot => {
          snapshot.forEach(
            doc => { data.push(doc.data()) }
          )
        }
      )
      setCategories(data);
    };  
    getCategories();
  }, [])

  return (
      <div className="App">
          <div id='boxForBg'>
            <Header />
        
            <Routes>                
                <Route path="/categories/" element={<Pages.QuizCategoryPage />}>
                  <Route path=":level" element={<Pages.QuizPage /> } />
                </Route>

                <Route path="/"  element={user? <Pages.Home /> : <Pages.Landing />}/>
                <Route path="home"  element={user? <Pages.Home /> : <Pages.Landing />}/>
                <Route path="/ranking" element={<Pages.RankingPage/>} />
                <Route path="/contact-form" element={<Pages.ContactPage/>} />
                <Route path="/method" element={<Pages.MethodPage/>} />
                <Route path="/author" element={<Pages.AuthorPage />} />
                <Route path="/self-learning" element={<Pages.SelfLearningPage />} />
                <Route path="/online-battle" element={<Pages.BattlePage />} />
                <Route path="/make-list" element={<Pages.MakeListPage />} />
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
