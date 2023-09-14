// components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  const backgroundImageUrl = '/bg-index.png'; // Ganti dengan URL gambar latar belakang Anda

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div
      className="bg-fixed bg-cover"
      style={divStyle}
    >
      {children}
    </div>
  );
};

export default Layout;
