$(function () {
    createCards();

    function createCards() {
        let itemArray = JSON.parse(localStorage.getItem('items'));
        if (!itemArray) {
            $('main').append('Din varukorg är tom!');
        } else {
            let total = 0;
            for (let i = 0; i < itemArray.length; i++) {
                let card = `
                    <div class="card"> 
                        <figure class="card-header">
                            <img src="${itemArray[i].item.src}" alt="wand" /> 
                        </figure>   
                        <div class="card-inner">
                            <h2>${itemArray[i].item.owner}</h2>
                            <p>
                                Wood: ${itemArray[i].item.wood}<br> 
                                Core: ${itemArray[i].item.core}<br>
                                Price Each: ${itemArray[i].item.price} Galleons <br>
                                Quantity: <span class="num">${itemArray[i].num}</span>
                            </p>
                        </div>
                    </div>`;
                $('main').append(card);
                total += itemArray[i].item.price * itemArray[i].num;
            }
            $('.total').text(total)
        }
    }
});