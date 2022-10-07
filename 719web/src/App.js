import 'antd/dist/antd.min.css'
import "./App.css"
import {Menu} from "antd"
import{Route,Routes,useNavigate} from "react-router-dom"
import{
  DashboardOutlined,
  HomeTwoTone,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined,
}from "@ant-design/icons/lib/icons"

function App() {
  return(
    <div 
      style={{ 
        display:"flex",
        flexDirection: "column", 
        flex:1, 
        height: '100vh',
      }}
    >
      <Header/>
      <div 
        style={{ 
          display:"flex",
          flexDirection: "row", 
          flex:1
        }}
      >
        <SideMenu/>
        <Content/>
      </div>
      <Footer/>
      </div>
      
  )
}

function Header() {
  return(
  <div 
    style={{
      height:60,
      backgroundColor:"lightskyblue",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}
  >
    Comp719 Human Computer interaction
    </div>
  )
}

function Footer(){
  return( <div 
    style={{
      height:60,
      backgroundColor:"lightgrey",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"bold",
    }}
  >
    Footer
    </div>
  )
}

function SideMenu(){
  const navigate = useNavigate()
  return(
      <Menu 
      onClick={({key})=>{
        navigate(key)
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label:"Introduction",key:"/",iconS:<HomeTwoTone />},
        { label:"Body paragraphy 1",key:"/Body paragraphy 1",iconS:<DashboardOutlined />},
        { label:"Body paragraphy 2",key:"/Body paragraphy 2",iconS:<UnorderedListOutlined />},
        { label:"Disscussion",key:"/Disscussion",iconS:<UserOutlined />},
        { label:"Conclusion",key:"/Conclusion",iconS:<PoweroffOutlined />}
      ]}
      ></Menu>
      
)
}

function Content(){
 return<div>
  <Routes>
    <Route path="/" element={<div>Introduction</div>}></Route>
    <Route path="/Body paragraphy 1" element={<div>Body paragraphy 1</div>}></Route>
    <Route path="/Body paragraphy 2" element={<div>Body paragraphy 2</div>}></Route>
    <Route path="/Disscussion" element={<div>Disscussion</div>}></Route>
    <Route path="/Conclusion" element={<div>Conclusion</div>}></Route>
  </Routes>
  </div> 
}

export default App;
