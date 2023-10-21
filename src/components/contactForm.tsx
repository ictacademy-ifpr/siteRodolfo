import React, { useState } from "react";
import { useRouter } from "next/router";

interface ContactFormData {
  nome: string;
  email: string;
  mensagem: string;
}

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // Envia o formulário para o endereço de e-mail especificado
    const data: ContactFormData = {
      nome,
      email,
      mensagem,
    };

    try {
      await fetch("https://seu-servidor-de-email.com/enviar-email", {
        method: "POST",
        body: JSON.stringify(data),
      });

      // Redireciona o usuário para uma página de sucesso
      await router.push("/obrigado");
    } catch (error) {
      // Mostra uma mensagem de erro
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
