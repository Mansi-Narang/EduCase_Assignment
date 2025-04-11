import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './app/Index.jsx';
import SignIn from './app/SignIn.jsx';
import SignUp from './app/SignUp.jsx';
import Account from './app/Account.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
