import { ReactComponent as Logo } from '../../images/logo.svg';
import s from './About.module.css';

export const About = () => (
  <div data-hook='about-page' className={s.about}>
    <Logo height={50} />
    You are on the about page
  </div>
);
