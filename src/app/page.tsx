"use client"
import React, { useState } from 'react';

export default function Home() {
  const [bg, setBg] = useState('white')

  const bgChange = (color) => {
    setBg(color);
  }

  return (
      <div id="background" className="h-screen w-screen flex justify-center align-middle overflow-hidden" style={{ backgroundColor: bg }}>
        <button onClick={() => bgChange('white')} className="p-4 bg-purple-700 mr-2 my-auto w-24">On</button>
        <button onClick={() => bgChange('#B0B0B0')} className="p-4 bg-purple-700 ml-2 my-auto w-24">Off</button>
      </div>
  );
}
