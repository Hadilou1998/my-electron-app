import { useEffect, useRef } from "react";
import Chat from "../components/Chat";
import Nav from "../components/Nav";
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'De quoi allons nous parler aujourd\'hui ?', 
        'Que souhaites-tu apprendre de nouveau ?', 
        'Comment puis-je t\'aider ?'
      ],
      typeSpeed: 20,
      contentType: 'html',
      loop: true,
      cursorChar: '...',
      fadeOut: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-w-full min-h-screen p-5 bg-slate-50">
      <Nav />
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-6xl font-semibold">lya</h1>
        <p className="text-xl"><span ref={el}></span></p>
      </section>
      <Chat />
    </main>
  )
}