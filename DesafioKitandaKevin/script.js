window.onload = function(){

    let produtos = [
        {description:"Mamão", price: 3.40},
        {description:"Pêssego", price: 2.10},
        {description:"Kiwi", price: 4.70},
        {description:"Laranja", price: 1.90},
        {description:"Abacaxi", price: 5.60}
    ]   

    let prodAdd = [];
    
    const listProd = document.querySelector("#listProd");

    const totalCompra = document.querySelector("#totalCompra");

    const cestaCliente = document.querySelector("#cestaCliente");


    
    (() => {
            produtos.forEach(produto => {
                let li = document.createElement("li");
                li.textContent = produto.description;  
                li.dataset.price = produto.price;  
                li.addEventListener('click', function() {
                    if(prodAdd.indexOf(this.textContent) != -1){
                        alert(`O item ${this.textContent} já está na sua cesta`);
                    }else{
                        prodAdd.push(this.textContent);

                        let li2 = document.createElement("li");
                        li2.textContent = this.textContent;  
                        cestaCliente.appendChild(li2);  

                        const total = Number(totalCompra.value) + Number(this.dataset.price);
                        totalCompra.value = total.toFixed(2);
                    } 
                });

                listProd.appendChild(li);  
            });
        }
    )()

} 