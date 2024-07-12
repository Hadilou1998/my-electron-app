import { useState } from 'react';
import Nav from '../components/Nav';
import EyeIcon from '../components/icons/EyeIcon';
import TrashIcon from '../components/icons/TrashIcon';
import CalendarIcon from '../components/icons/CalendarICon';

interface Chat {
    id: number;
    question: string;
    answer: string;
    date: string;
}

export default function Messages() {
    const [chats] = useState<Chat[]>([
        {
            id: 1,
            question: "De quoi allons nous parler aujourd'hui ?",
            answer: "Bonjour, je suis Lya, un IA de conversation. Je suis là pour vous aider à répondre à vos questions et vous fournir des informations utiles. Comment puis-je vous aider aujourd'hui ?",
            date: '2023-03-01',
        },
        {
            id: 2,
            question: 'Que souhaites-tu apprendre de nouveau ?',
            answer: "Je suis là pour vous aider à répondre à vos questions et vous fournir des informations utiles. Comment puis-je vous aider aujourd'hui ?",
            date: '2023-03-01',
        },
    ]);

    return (
        <main className="flex flex-col items-center min-w-full min-h-screen gap-4 p-5 bg-slate-50">
            <Nav />
            <div>
                <h1 className="mb-10 text-6xl font-semibold text-center">
                    Messages
                </h1>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {chats.map((c) => (
                        <li
                            className="p-5 bg-white border h-46 rounded-xl hover:shadow-md"
                            key={c.id}
                        >
                            <div className="flex items-center justify-between text-sm uppercase text-slate-400">
                                <CalendarIcon /> Le {c.date || ''}
                            </div>
                            <hr className="my-4" />
                            <div className="italic text-slate-400">
                                {c.question}
                            </div>
                            <div className="flex justify-between mt-4">
                                <button className="p-2 bg-blue-500 rounded-full hover:bg-blue-800">
                                    <EyeIcon />
                                </button>
                                <button className="p-2 bg-red-700 rounded-full hover:bg-red-800">
                                    <TrashIcon />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}