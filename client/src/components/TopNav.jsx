import { CiMail,CiPhone,CiLogin   } from "react-icons/ci";
import './navbar.css'

const IconInfo = ({icon,info}) => {
  return (
    <div className="iconAndInfo">
        {icon}
        <span>{info}</span>
      </div>
  )
}


const TopNav = () => {
  return (
    <div className='main-section'>
      <IconInfo icon={<CiMail className='icon'/>} info="dreamer@appscrip.com"/>
      <IconInfo icon={<CiPhone className='icon'/>} info="(259) 235 - 561"/>
      <IconInfo icon={<CiLogin className='icon'/>} info="Sign In / Sign Up"/>
    </div>
  )
}

export default TopNav
