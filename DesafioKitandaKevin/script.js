window.onload = function(){

    let produtos = [
        {description:"Laranja", price: 2.50},
        {description:"Maracujá", price: 1.90},
        {description:"Acerola", price: 5.60},
        {description:"Goiaba", price: 3.80},
        {description:"Morango", price: 4.50}
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