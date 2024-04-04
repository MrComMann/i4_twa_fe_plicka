"use client"
import React, { useState, useEffect } from 'react';
import '@/app/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faGear, faAnglesRight, faAnglesLeft, faFile, faPrint, faLink } from '@fortawesome/free-solid-svg-icons'

export default function ColorShower() {

    const [isOpen, setIsOpen] = useState(true)

    const showMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    const [noteData, setNoteData] = useState<null | { title: string; content: any[]; title2: string }>(null);
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedFile, setSelectedFile] = useState('I3_HS');
    const [selectedButton, setSelectedButton] = useState('book');

    useEffect(() => {
        fetch('api/notes/I3_HS')
            .then(response => response.json())
            .then(data => setNoteData(data));
    }, []);

    const handleFileClick = (file: string) => {
        setSelectedFile(file);
    };

    const handleButtonClick = (button: string) => {
        setSelectedButton(button);
    };

    return (
      <div className="w-screen h-screen flex">
        <div className="w-[82px] py-[10px] flex flex-col border-r-[#F5F5F4] border-r-[2px]">
            <div className="flex flex-col gap-[16px]">
                <div onClick={() => handleButtonClick('home')} className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center text-[24px] hover:cursor-pointer">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div onClick={() => handleButtonClick('book')} className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center bg-[#F1F1F0] text-[24px] hover:cursor-pointer">
                    <FontAwesomeIcon icon={faBook} />
                </div>
                <div onClick={() => handleButtonClick('gear')} className="w-[82px] h-[64px] hover:bg-[#EAEAE8] flex justify-center items-center text-[24px] hover:cursor-pointer">
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
            {noteData && (
                        <>
                            <div className='flex items-start gap-[10px] self-stretch pt-9 pb-2'>
                                <p className='text-[30px] font-semibold'>{noteData.title}</p>
                            </div>
                            {noteData.content.map((item, index) => (
                                typeof item === 'string' ? (
                                    <div key={index} className='flex items-start gap-[10px] self-stretch flex-col py-1'>
                                        <p className='text-normal font-normal leading-6'>{item}</p>
                                    </div>
                                ) : (
                                    <div key={index} className='flex items-start gap-[10px] self-stretch flex-col'>
                                        <ul className='list-disc list-inside leading-6'>
                                        {item.items.map((listItem: string, listItemIndex: number) => (
                                            <li key={listItemIndex}>{listItem}</li>
                                        ))}
                                        </ul>
                                    </div>
                                )
                            ))}
                            <div className='flex items-start gap-[10px] self-stretch pt-9 pb-2'>
                                <p className='text-[30px] font-semibold'>{noteData.title2}</p>
                            </div>
                        </>
                    )}
            </div>
        </div>
      </div>
    );
}
