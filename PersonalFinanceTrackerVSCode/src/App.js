import './App.css';
import HeaderNav from './Pages/HeaderNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './LoginAndSignUp/PageNotFound';
import LoginAndSignUp from './LoginAndSignUp/LoginAndSignUp';
//import DashBoard from './FinanceTrackerCRUD/Dashboard';
import DashBoard from './FinanceTrackerCRUD/DashBoard'
function App() {
  return (
    <div className="">
      <BrowserRouter>
          <HeaderNav/>
              <Routes>
                  <Route path="/" element={<LoginAndSignUp/>}/>
                  {/* <Route path="/dashboard" element={<DashBoard/>}/> */}
                  <Route path='/dashboard' element={<DashBoard/>}/>
                  {/* <Route path='/update/:id' element={<UpdateDetails/>}/> */}
                  {/* <Route path='/addskill/:id' element={<AddSkill/>}/> */}
                  <Route path="*" element={<PageNotFound/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
