// import logo from './logo.svg';
// import './App.css';  //children component with style css but when I comment codes it work ?
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';  
import Menu from './components/menu';  


function AppV1() {
  return (
    <div>
      <Header />
      <Footer content='React One Nigth' postcode={41000} />
      <hr></hr>
      <Sidebar />
      <hr/>
      <Menu />
    </div>
  );
}

export default AppV1;
