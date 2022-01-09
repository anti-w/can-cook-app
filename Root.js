import { registerRootComponent } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

import App from './App';


/*
  Este é o component principal que está sendo apontado no arquivo package.json, line main. É através dessa propriedade que o expo sabe por qual component ele deve começar sua build.

  É também aqui que realizo o import das configurações do redux para que o component App (que contem os demais componentes e telas) possa ter acesso ao estado global e suas actions. o redux fornece uma classe denominada Provider que contém uma propriedade store onde passamos as configurações necessárias para o redux
*/

const Redux = () => (
  <Provider store={storeConfig}>
    <App />
  </Provider>
)

registerRootComponent(Redux);
