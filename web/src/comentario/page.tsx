"use client";import React, { useState } from "react";

function Comentarios() {
  // State para armazenar os comentários
  const [comentarios, setComentarios] = useState<string[]>([]); // Definindo o tipo como um array de strings
  // State para controlar o novo comentário que está sendo digitado
  const [novoComentario, setNovoComentario] = useState<string>(""); // Definindo o tipo como string

  // Limite de caracteres para um comentário
  const MAX_CARACTERES = 280;

  // Função para lidar com a mudança no texto do novo comentário
  const handleComentarioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => { // Adicionando a tipagem para o evento
    const texto = event.target.value;
    if (texto.length <= MAX_CARACTERES) {
      setNovoComentario(texto);
    }
  };

  // Função para adicionar um novo comentário
  const adicionarComentario = () => {
    if (novoComentario.trim() !== "") {
      // Usando spread operator para adicionar o novo comentário à lista existente
      setComentarios([...comentarios, novoComentario]);
      // Limpa o campo de entrada de comentário após a adição
      setNovoComentario("");
    }
  };

  // Função para excluir um comentário com base no índice
  const excluirComentario = (index: number) => {
    const novosComentarios = [...comentarios];
    // Remove o comentário no índice especificado
    novosComentarios.splice(index, 1);
    setComentarios(novosComentarios);
  };

  return (
    <div className="p-4 bg-slate-900 text-slate-100">
      <h2 className="text-2xl mb-4">Comment session</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          placeholder="Type your comment here"
          value={novoComentario}
          onChange={handleComentarioChange}
        ></textarea>
        <div className="text-right text-gray-400">
          {MAX_CARACTERES - novoComentario.length} characters remaining
        </div>
      </div>
      <div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={adicionarComentario}
        >
          Add Comment
        </button>
      </div>
      <ul className="mt-4">
        {/* Mapeia e exibe todos os comentários na lista */}
        {comentarios.map((comentario, index) => (
          <li className="mb-2 flex justify-between" key={index}>
            <div>{comentario}</div>
            {/* Botão para excluir um comentário específico */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => excluirComentario(index)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comentarios;
