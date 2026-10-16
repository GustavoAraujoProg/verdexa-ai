# Verdexa AI — telas mobile (React Native + Expo)

Projeto configurado para **Expo SDK 57** e focado **somente no layout** das nove telas da primeira linha da referência:
1. Splash
2. Onboarding 1
3. Onboarding 2
4. Onboarding 3
5. Login
6. Cadastro
7. Recuperação de senha
8. Home
9. Captura de imagem

Cada tela fica em um arquivo separado dentro de `screens/`. Os botões permitem navegar entre as telas para visualizar o protótipo. Não há integração com API, autenticação real, câmera real ou persistência — isso fica para a próxima etapa.

## Como executar
1. Instale Node.js 22.13 ou superior.
2. Extraia o ZIP e abra a pasta `verdexa-ai` no terminal.
3. Execute `npm install`.
4. Execute `npx expo install --fix` para alinhar as dependências do SDK.
5. Execute `npx expo start`.
5. Abra com Expo Go ou emulador.

## Estrutura
- `App.tsx`: alterna entre as telas do protótipo.
- `screens/`: nove telas independentes.
- `components/UI.tsx`: cores e componentes visuais compartilhados.
