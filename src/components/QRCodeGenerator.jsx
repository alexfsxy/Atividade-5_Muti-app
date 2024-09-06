import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 50px auto;
`;

const Title = styled.h2`
margin-bottom: 20px;
font-size: 24px;
text-align: center;
color: #562135;
`

const Input = styled.input`
width: 30px;
margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do input.
  padding: 12px; // Adiciona padding de 12px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 100%; // Define a largura como 100% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s;

  &:focus{
    border-color: #007bff;
    outline: none;
  }
`

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  return(
    <Container>
      <Title>QR Code Generator</Title>
      <h2>Coloque o texto:</h2>
  <Input
      type="text"
      value = {text}
      onChange = {(e) => setText(e.target.value)}
      placeholder = "Enter text to encode"
       />
      
      {text && (
        
        <div>
          <QRCode value={text} size={118} />
          </div>
      )}
    
    </Container>
  );
};

export default QRCodeGenerator;
