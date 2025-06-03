import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto Alpha 6M – Transformação em 6 Meses</title>
      </Head>

      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Projeto Alpha 6M</h1>
        <nav>
          <a href="#como-funciona" className="mx-2">
            Como Funciona
          </a>
          <a href="#resultados" className="mx-2">
            Resultados
          </a>
          <a href="#inscricao" className="mx-2">
            Inscrição
          </a>
          <a href="#faq" className="mx-2">
            FAQ
          </a>
        </nav>
      </header>

      <main className="text-center">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <h2 className="text-4xl font-bold">
            Transforme Seu Corpo em 6 Meses
          </h2>
          <p className="mt-4">
            Entre para o Projeto Alpha 6M e conquiste o físico que sempre quis!
          </p>
          <a
            href="https://pages.mfitpersonal.com.br/p/1w6w?checkout=true"
            target="_blank"
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Quero Participar Agora!
          </a>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-16 bg-gray-100">
          <h3 className="text-3xl font-bold mb-4">
            Um Programa de Transformação em 6 Meses
          </h3>
          <p>
            ✅ Treinos progressivos e adaptados ao seu nível.
            <br />
            ✅ Vídeos explicativos detalhados.
            <br />
            ✅ Suporte exclusivo para dúvidas e motivação.
            <br />✅ Materiais bônus para otimizar seus resultados.
          </p>
        </section>

        {/* O que você recebe */}
        <section className="py-16">
          <h3 className="text-3xl font-bold mb-4">O que você recebe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded shadow">
              💪 Treinos Progressivos
            </div>
            <div className="p-4 bg-white rounded shadow">
              📞 Suporte Exclusivo
            </div>
            <div className="p-4 bg-white rounded shadow">
              🎥 Vídeos Detalhados
            </div>
            <div className="p-4 bg-white rounded shadow">🤝 Grupo de Apoio</div>
            <div className="p-4 bg-white rounded shadow">📚 Material Bônus</div>
          </div>
        </section>

        {/* Resultados Reais */}
        <section id="resultados" className="py-16 bg-gray-100">
          <h3 className="text-3xl font-bold mb-4">
            Resultados de Quem Já Entrou no Desafio
          </h3>
          <p>
            “Eu nunca pensei que poderia ter um físico assim. Foi a melhor
            decisão que já tomei!”
          </p>
        </section>

        {/* Preço e Garantia */}
        <section id="inscricao" className="py-16">
          <h3 className="text-3xl font-bold mb-4">
            Seu Novo Corpo por Apenas R$349,90!
          </h3>
          <p>
            Este valor único garante 6 meses de evolução e acesso vitalício aos
            conteúdos.
          </p>
          <a
            href="https://pages.mfitpersonal.com.br/p/1w6w?checkout=true"
            target="_blank"
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Garanta Sua Vaga Agora
          </a>
          <p className="mt-4">
            Garantia: Se em 30 dias você não estiver satisfeito, devolvemos seu
            dinheiro. Vagas limitadas!
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-gray-100">
          <h3 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h3>
          <ul className="text-left max-w-2xl mx-auto">
            <li>
              <strong>Como funciona o acesso ao programa?</strong> Após
              inscrição, você recebe o acesso exclusivo.
            </li>
            <li>
              <strong>Preciso de equipamentos específicos?</strong> Não, treinos
              adaptados para casa ou academia.
            </li>
            <li>
              <strong>É para iniciantes ou avançados?</strong> Para todos os
              níveis, com evolução progressiva.
            </li>
            <li>
              <strong>Posso treinar em casa ou só na academia?</strong> Ambos,
              com adaptações e instruções.
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2025 Projeto Alpha 6M. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://wa.me/seunumero" target="_blank">
            WhatsApp
          </a>
        </div>
        <p className="mt-2 text-sm">Política de Privacidade | Termos de Uso</p>
      </footer>
    </>
  );
}
