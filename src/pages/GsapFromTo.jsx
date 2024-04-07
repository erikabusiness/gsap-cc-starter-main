import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFromTo = () => {
  // Utilizando useGSAP para iniciar a animação quando o componente for montado
  useGSAP(() => {
    // Animando as propriedades do elemento #red-box
    gsap.fromTo(
      '#red-box',
      {
        x: 0, // Posição inicial X
        rotation: 0, // Rotação inicial
        borderRadius: '0%' // Borda inicial (quadrada)
      },
      {
        x: 250, // Posição final X
        repeat: -1, // Repetir indefinidamente
        yoyo: true, // Alternar entre o estado inicial e final
        borderRadius: '100%', // Alterando a borda para transformar em um círculo
        rotation: 360, // Rotacionando o elemento
        duration: 2, // Duração da animação em segundos
        ease: 'bounce.out' // Easing da animação (efeito de "quicada" no final)
      }
    );
  }, []); // O array de dependências vazio assegura que a animação só seja iniciada uma vez quando o componente for montado
  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
