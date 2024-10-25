import TollBar from './Components /TollBar/TollBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Container /Home/Home.tsx';
import AboutUs from './Container /AboutUs/AboutUs.tsx';
import Contacts from './Container /Contacts/Contacts.tsx';
import Add from './Container /Add/Add.tsx';
import Edit from './Container /Edit/Edit.tsx';
import FullItemView from './Container /FullItemView/FullItemView.tsx';

const App = () => {
  return (
    <div className="container">
      <header>
        <TollBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Home/>}/>
        <Route path="/post/add" element={<Add/>}/>
        <Route path="/post/:postId" element={<FullItemView/>}/>
        <Route path="/post/:postId/edit" element={<Edit/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
};

export default App
