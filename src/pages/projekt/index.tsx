"use client"
import React, { useState, useEffect } from 'react';
import '@/app/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faGear, faAnglesRight, faAnglesLeft, faFile, faPrint, faLink, faSave, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';

export default function ColorShower() {

    const [isOpen, setIsOpen] = useState(true)
    const showMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    const [notes, setNotes] = useState<null | string>(null);

    useEffect(() => {
        fetch('/api/notes')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNotes(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    const [selectedNote, setSelectedNote] = useState(null);

    const showDelete = (id) => {
        setSelectedNote(id);
    }

    const hideDelete = () => {
        setSelectedNote(null);
    }

    const handleDelete = () => {
        console.log(selectedNote)
        fetch(`/api/notes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedNote })
        })
        .then(response => {
            // Refresh the notes list after successful deletion
            return fetch('/api/notes');
        })
        .then(response => response.json())
        .then(data => {
            setNotes(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


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
                    
                    {notes && notes.map((note, index) => (
                        <>
                            <div className="flex gap-[10px] text-[12px] hover:bg-[#EAEAE8] group">
                                <a href={"/projekt/"+note.id} className="py-[6px] px-[16px] flex gap-[10px] hover:cursor-pointer w-full">
                                    <div>
                                        <FontAwesomeIcon icon={faFile} />
                                    </div>
                                    <div>{note.name}</div>
                                </a>
                                <button className="py-[6px] px-[16px] ml-auto hidden group-hover:block hover:text-red-600" onClick={() => showDelete(note.id)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            {selectedNote == note.id && (
                                <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[#dedede83] flex justify-center items-center">
                                    <div className="bg-white p-12 gap-8 rounded-2xl flex flex-col">
                                        <h3 className="text-2xl">Opravdu chcete smazat poznámku?</h3>
                                        <div className="flex justify-center gap-16">
                                            <button className="bg-[#41F203] text-white p-2 px-3 rounded" onClick={handleDelete}>Ano</button>
                                            <button className="bg-[#F21103] text-white p-2 px-3 rounded" onClick={hideDelete}>Ne</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}

                    <div className="py-[6px] px-[16px] flex gap-[10px] text-[12px] hover:bg-[#EAEAE8] hover:cursor-pointer ">
                        <div>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div>Nová poznámka</div>
                    </div>

                </div>
            ) : (
                <></>
            )}
            <div className="w-full self-stretch flex flex-col gap-[128px] items-center">
                <div className="w-full flex justify-between border-b-[#F5F5F4] border-b-[1px] px-[36px] py-[12px]">
                    <div className="text-[14px] text-[#19171199] font-semibold">
                        Poznámky
                    </div>
                    <div className="flex gap-[16px]">
                        <div className="text-[#19171199] hover:cursor-pointer hover:text-[#37352F]"><FontAwesomeIcon icon={faSave} /></div>
                        <div className="text-[#19171199] hover:cursor-pointer hover:text-[#37352F]"><FontAwesomeIcon icon={faPrint} /></div>
                        <div className="text-[#19171199] hover:cursor-pointer hover:text-[#37352F]"><FontAwesomeIcon icon={faLink} /></div>
                    </div>
                </div>
                <div className="w-[708px]">
                    <h1 className="text-2xl w-full text-center">Otevřete nebo vytvořte poznámku</h1>
                </div>
            </div>
        </div>
    );
}