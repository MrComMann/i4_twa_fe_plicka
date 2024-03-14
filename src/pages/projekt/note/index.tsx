"use client"
import React, { useState } from 'react';
import '@/app/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faGear, faAnglesRight, faAnglesLeft, faFile, faPrint, faLink } from '@fortawesome/free-solid-svg-icons'

export default function ColorShower() {

    const [isOpen, setIsOpen] = useState(true)

    const showMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }
  
    return (
      <div className="w-screen h-screen flex">
        <div className="w-[82px] py-[10px] flex flex-col border-r-[#F5F5F4] border-r-[2px]">
            <div className="flex flex-col gap-[16px]">
                <div className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center text-[24px] hover:cursor-pointer">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center bg-[#F1F1F0] text-[24px] hover:cursor-pointer">
                    <FontAwesomeIcon icon={faBook} />
                </div>
                <div className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center text-[24px] hover:cursor-pointer">
                    <FontAwesomeIcon icon={faGear} />
                </div>
            </div>
            <div onClick={showMenu} className="mt-auto w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center text-[24px] hover:cursor-pointer">
                {isOpen ? (
                    <FontAwesomeIcon icon={faAnglesLeft} />
                ) : (
                    <FontAwesomeIcon icon={faAnglesRight} />
                )}
            </div>
        </div>
        {isOpen ? (
            <div className="flex flex-col w-[192px] py-[24px] border-r-[#EDEDF0] border-r-[3px] bg-[#FBFBFA] gap-[4px] font-semibold">
                <div className="py-[6px] px-[16px] flex gap-[10px] text-[12px] hover:bg-[#EAEAE8] hover:cursor-pointer bg-[#F1F1F0]">
                    <div>
                        <FontAwesomeIcon icon={faFile} />
                    </div>
                    <div>I4 HS</div>
                </div>
                <div className="py-[6px] px-[16px] flex gap-[10px] text-[12px] hover:bg-[#EAEAE8] hover:cursor-pointer">
                    <div>
                        <FontAwesomeIcon icon={faFile} />
                    </div>
                    <div>I3 HS</div>
                </div>
                <div className="py-[6px] px-[16px] flex gap-[10px] text-[12px] hover:bg-[#EAEAE8] hover:cursor-pointer">
                    <div>
                        <FontAwesomeIcon icon={faFile} />
                    </div>
                    <div>I2 HS</div>
                </div>
            </div>
        ) : (
            <></>
        )}
        <div className="w-full self-stretch flex flex-col gap-[128px] items-center">
            <div className="w-full flex justify-between border-b-[#F5F5F4] border-b-[1px] px-[36px] py-[12px]">
                <div className="text-[14px] text-[#19171199] font-semibold">
                    I4 HS
                </div>
                <div className="flex gap-[16px]">
                    <div className="text-[#19171199] hover:cursor-pointer hover:text-[#37352F]"><FontAwesomeIcon icon={faPrint} /></div>
                    <div className="text-[#19171199] hover:cursor-pointer hover:text-[#37352F]"><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
            <div className="w-[708px]">
                <p className="text-[40px] py-[12px] font-bold border-b-[#EDEDF0] border-b-[1px]">
                    I4 HS
                </p>
                <p className="text-[30px] pt-[36px] pb-[8px] font-semibold text-[#37352F]">
                    Dynamický routing
                </p>
                <p className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                    Dynamický routing nám zajišťuje routovací infrastrukturu, do které již nemusíme zasahovat. Nemusíme psát routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen nastavit.
                </p>
                <p className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                    Kromě funkcí routingu nám DRP poskytují:
                </p> 
                <ul className="list-disc list-inside">
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Škálovatelnost
                    </li>
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Rychlou konvergenci
                    </li>
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Dostupnost
                    </li>
                </ul>
                <p className="text-[30px] pt-[36px] pb-[8px] font-semibold text-[#37352F]">
                    Charakteristika DRP
                </p>
                <p className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                    O každém dynamickém routovacím protokolu můžeme říct, že má minimálně:
                </p> 
                <ul className="list-disc list-inside">
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Algoritmus
                    </li>
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Metriku
                    </li>
                    <li className="py-[4px] leading-6 text-[#37352F] text-[16px]">
                        Zprávy daného protokolu
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
}
