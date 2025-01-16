import { FC } from "react";
import stacklineLogo from '../assets/stackline_logo.svg';

const Header: FC = () => (
  <div className="fixed top-0 left-0 h-16 w-screen bg-primary p-4 z-50">
    <a href="https://www.stackline.com/" target="_blank">
      <img src={stacklineLogo} className="h-full" alt="Stackline logo" />
    </a>
  </div>
);

export default Header;