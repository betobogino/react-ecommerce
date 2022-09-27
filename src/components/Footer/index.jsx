import { IconWidgetGitHub } from '../IconWidget/IconWidgetGitHub';
import { IconWidgetLinkedin } from '../IconWidget/IconWidgetLinkedin';

const Footer = () => {
  return (
    <div className="footer">
      <p>Creado con <span title="<3">❤</span> por Alberto Bogino</p>
      <div className='footerIcons'>
        <div title="GitHub" className="footerIcon">
          <a href="https://github.com/betobogino" target="_blank" rel="noreferrer">
            <IconWidgetGitHub />
          </a>
        </div>
        <div title="Linkedin" className="footerIcon">
          <a href="https://www.linkedin.com/in/alberto-bogino-303a12174/" target="_blank" rel="noreferrer">
            <IconWidgetLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;