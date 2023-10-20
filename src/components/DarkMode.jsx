import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
        <span className="slider round"></span>
      </label>
      <p className="mt-2">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
    </div>
  );
};

export default DarkModeToggle;
