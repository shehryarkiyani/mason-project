import React from 'react'
import './Header.css'
import { Link ,useNavigate} from 'react-router-dom'

const Header = () => {
const navigate=useNavigate()
    const ChangeActiveStatus=(id)=>{
        if(id=="Home"){
            if(document.getElementById("Home").classList.contains("nav-active")){

            }else{
                document.getElementById("Home").classList.add("nav-active")
                document.getElementById("About").classList.remove("nav-active")
                document.getElementById("Benefits").classList.remove("nav-active")
                document.getElementById("Works").classList.remove("nav-active")
                document.getElementById("Plans").classList.remove("nav-active")
                document.getElementById("News").classList.remove("nav-active")
            }
        }else if(id=="About"){
            document.getElementById("About").classList.add("nav-active")
                document.getElementById("Home").classList.remove("nav-active")
                document.getElementById("Benefits").classList.remove("nav-active")
                document.getElementById("Works").classList.remove("nav-active")
                document.getElementById("Plans").classList.remove("nav-active")
                document.getElementById("News").classList.remove("nav-active")

        }else if(id=="Benefits"){
            document.getElementById("Benefits").classList.add("nav-active")
                document.getElementById("About").classList.remove("nav-active")
                document.getElementById("Home").classList.remove("nav-active")
                document.getElementById("Works").classList.remove("nav-active")
                document.getElementById("Plans").classList.remove("nav-active")
                document.getElementById("News").classList.remove("nav-active")

        }else if(id=="Works"){
            document.getElementById("Works").classList.add("nav-active")
                document.getElementById("About").classList.remove("nav-active")
                document.getElementById("Benefits").classList.remove("nav-active")
                document.getElementById("Home").classList.remove("nav-active")
                document.getElementById("Plans").classList.remove("nav-active")
                document.getElementById("News").classList.remove("nav-active")

        }else if(id=="Plans"){
            document.getElementById("Plans").classList.add("nav-active")
                document.getElementById("About").classList.remove("nav-active")
                document.getElementById("Benefits").classList.remove("nav-active")
                document.getElementById("Works").classList.remove("nav-active")
                document.getElementById("Home").classList.remove("nav-active")
                document.getElementById("News").classList.remove("nav-active")

        }else if(id=="News"){
            document.getElementById("News").classList.add("nav-active")
                document.getElementById("About").classList.remove("nav-active")
                document.getElementById("Benefits").classList.remove("nav-active")
                document.getElementById("Works").classList.remove("nav-active")
                document.getElementById("Plans").classList.remove("nav-active")
                document.getElementById("Home").classList.remove("nav-active")

        }
    }
  return (
    <div>

<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src='./images/logo.svg'/> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><img src='./images/nav.svg'/> </span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav ">
      <li class="nav-item nav-active" id="Home" onClick={()=>ChangeActiveStatus("Home")}>
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item " id="About"onClick={()=>ChangeActiveStatus("About")}>
        <Link class="nav-link" to="/">About </Link>
      </li>
      <li class="nav-item " id="Benefits" onClick={()=>ChangeActiveStatus("Benefits")}>
        <Link class="nav-link" to="/">Benefits </Link>
      </li>
      <li class="nav-item " id="Works" onClick={()=>ChangeActiveStatus("Works")}>
        <Link class="nav-link" to="/">How it works </Link>
      </li>
      <li class="nav-item active" id="Plans" onClick={()=>ChangeActiveStatus("Plans")}>
        <Link class="nav-link" to="/">Plans </Link>
      </li>
      <li class="nav-item " id="News" onClick={()=>ChangeActiveStatus("News")}>
        <Link class="nav-link" to="/news">News </Link>
      </li>
      </ul>
      <button class="home-contact-btn" type="submit" onClick={()=>navigate('/contact')}>Contact us</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header