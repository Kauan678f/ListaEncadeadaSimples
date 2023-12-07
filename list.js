// onde ocorre a logica de programação 

import noList from "./noList.js"
class list {
    constructor(){ // A cabeça e o final da lista
        this.root = null
        this.tall = null
    }

    add(data){ // adicionar um elemento
        if(!this.root){ // verificar se a cabeça é nulla
            let newData = new noList(data)
            this.root = newData
            this.tall = newData
            return;
        }
        else{ 
            let newData = new noList(data)
            this.tall.next = newData
            this.tall = this.tall.next
            return;
        }
    }

    print(position){ // sem paramentro printa a lista toda, mas com o parametro so retorna 
        let time = this.root // o o elemento da posição

        if (!time){ //verificar se a cabeça é nulla
            console.log("Voce não pode printar uma lista vazia")
            return;
        }else{
            if(position == undefined){ // retorna a lista inteira
                let response = ""
                while(time){
                    response += `${time.data} -> `
                    time = time.next
                }
                return response
            }else{ // retorna só po elemento da posição
                let fnPosition = 0
                let response;
                while(time){
                    if(fnPosition == position){
                        response = time.data
                        return response
                    }
                    time = time.next
                    fnPosition += 1
                }
                return;
            }
            
        }
    }

    printIndex(index){ // traz a posição de determinado elemto
        let time = this.root
        let fnPosition = 0
        let response = ""
        if (!time){ // verificação da lista, para evitar possiveis erros
            console.log("Voce não pode printar uma lista vazia")
            return;
        }else{
            while(time){
                if(time.data == index){
                    response += `${fnPosition} -> ` 
                }
                // else{
                //     time = time.next
                // }
                fnPosition += 1
                time = time.next
            }
            return response
        }
        console.log("index invalido")
        return;
    }

    delete(position){
        if(!this.root){
            console.log("Não pode remover um item de uma lista vazia")
        }
        else if(position == 0 || position == undefined){
            this.root = this.root.next
            return;
        }else{
            let fnPosition = 1
            let back = this.root
            let time = this.root.next
            while(time){
                if(fnPosition == position){
                    back.next = time.next
                    time.next = null
                }
                fnPosition += 1
                time = time.next
                back = back.next
            }
            console.log("Posição inexistente")
            return
        }
        
    }

    insert(data, position){
        if(!this.root){
            this.add(data)
            return
        }
        else if(position == undefined || position == 0){
            let newData = new noList(data)
            let time = newData
            time.next = this.root
            this.root = time
            return;
        }else{
            let back = this.root
            let time = this.root.next
            let newData = new noList(data)
            let fnPosition = 1
            while(time){
                if(fnPosition == position){
                    newData.next = time
                    back.next = newData
                    return
                }
                back = back.next
                time = time.next
                fnPosition += 1
            }
            console.log("Posição inexistente")
            return;
        }
        
        
    }

    len(){
        if(!this.root){
            console.log("Não é possivel vê o tamanho de uma lista que não existe")
        }else{
            let time = this.root
            let i = 0
            while(time){
                i += 1
                time = time.next
            }
            return i
        }
    }
}

export default list