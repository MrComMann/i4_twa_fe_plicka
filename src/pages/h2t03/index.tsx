"use client"
import React, { useState } from 'react';
import '@/app/globals.css'

export default function ColorShower() {
  
  return (
      <div className="mx-auto w-full">
        <form action="" className="flex flex-col items-center gap-[64px] p-[256px] max-w-[1440px]">
            <h1 className="text-[36px]">Color shower</h1>
            <div className="flex justify-between w-full"><input className="border self-stretch w-[384px]" type="text" value="#ff0011"/><button className="bg-[#8EFF7B] rounded-[10px] p-[24px] text-[24px]">Show</button></div>
            <div className="w-[96px] h-[96px] bg-[#FFB200]"></div>
            <div className="flex gap-[48px]">
                <div className="w-[64px] h-[64px] bg-[#FF0000]"></div>
                <div className="w-[64px] h-[64px] bg-[#D9D9D9]"></div>
                <div className="w-[64px] h-[64px] bg-[#00A3FF]"></div>
            </div>
        </form>
      </div>
  );
}
