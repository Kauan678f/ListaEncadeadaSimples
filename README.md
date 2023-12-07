# Lista Encadeada

## Introdução

Esta documentação visa fornecer informações sobre a estrutura, funcionalidades e implementação deste projeto.

## Objetivo do Projeto

O objetivo principal deste projeto é praticar conceitos de estrutura de dados e Testes Unitarios.

## Tecnologias usadas no projeto

- Nodejs

## Funcionalidades

### Métodos

- **add(number):** Adiciona um número à lista.
- **print(position?):** Sem parametro retorna todos os dados e com ele retorna o dado na posição especificada.
- **printIndex(number):** Retorna a posição do numero especificado.
- **delete(position?):** Sem parametro exclui o primeiro elemento da lista e com ele remove na posição especificada.
- **insert(number, position?):** Sem o segundo parametro ele adiciona o numero na posição 0 e com ele é adicionado na posição especificada.
- **len():** Retorna o tamanho da lista.

### Testando

```javascript
import List from "./list.js";

let listUse = new List();
listUse.insert(22, 7);
listUse.add(14);
listUse.add(41);
listUse.add(14);
listUse.insert(12);
// listUse.delete(0);
// listUse.delete(2);
console.log(listUse.print());
console.log(listUse.printIndex(14));
```
## Resultado Esperado
- Ao executar o exemplo acima, você deve obter a seguinte saída:
- Lista completa: 12 -> 22 -> 14 -> 41 -> 14 ->
- Posição do elemento 14: 2 -> 4 ->

### Autor
  - Kauan Silva da Costa
  - https://www.linkedin.com/in/kauan-silva-926306233/
