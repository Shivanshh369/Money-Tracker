import React from 'react';
import { Button } from './index';
import { useNavigate } from 'react-router-dom';

function NavBar({ className }) {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  const handleAbout = () => {
    navigate('/about');
  };
  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className={`${className} flex justify-around items-center w-full p-4 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg`}>
      <Button
        onClick={handleHome}
        name="Home"
        className="text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-purple-500 transition-colors duration-300 transform hover:-translate-y-1"
      />
      <Button
        onClick={handleAbout}
        name="About"
        className="text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-purple-500 transition-colors duration-300 transform hover:-translate-y-1"
      />
      <Button
        onClick={handleContact}
        name="Contact"
        className="text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-purple-500 transition-colors duration-300 transform hover:-translate-y-1"
      />
    </div>
  );
}

export default NavBar;
