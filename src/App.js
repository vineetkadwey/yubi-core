import "./App.scss";
import HomePageComponents from "./pages/homepage/HomePageComponents";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { RegisterationPage } from "./pages/registerationpage/RegisterationPage";
import Emailtemplete1 from "./components/emailtemplete/Emailtemplet1/Emailtemplete1";
import Emailtemplete2 from "./components/emailtemplete/Emailtemplete2/Emailtemplete2";
import PersonalIdentificationPage from "./pages/personalIdentificationpage/PersonalIdentificationPage";
// import { BrowserRouter, Routes,  } 

function App() {
  return (
    <div className="App">
      {/* <HomePageComponents /> */}
     <RegisterationPage />
     {/* <LoginPage /> */}

     {/* <Emailtemplete1/> */}
     {/* <Emailtemplete2/> */}
    {/* <PersonalIdContent/> */}
    {/* <PersonalIdentificationPage/> */}

    </div>
  );
}

export default App;
