import React, { Component } from 'react';

class FormularioCadastros extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..."
        />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastros;