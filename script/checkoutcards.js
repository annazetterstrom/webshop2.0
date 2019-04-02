$(function(){
    createCards();
    function createCards(){
        let itemArray = JSON.parse(localStorage.getItem('items'));
        $('.container').html("");
        if(!itemArray){
            $('.container').append('Your cart is empty!');
        } else {
            console.log(itemArray);
            for(let i=0;i<itemArray.length;i++){
                let card = `
                <p>
                    <span>${itemArray[i].item.owner}  <span class="price">${itemArray[i].item.price}</span> Galleons</span>
                <button data-product-code=${itemArray[i].item.code} class="sm-btn btn-danger removebutton">X</button>
                <input class="quantity" type="number" max="5" min="1" />
               </p>
                  `;
                $('.container').append(card);
            }
            let total = 0;
            let $prices = $('.price');
            console.log($prices[0]);
            for(let i=0;i<$prices.length;i++){
                total += +$prices[i].innerText;
                console.log($prices[i].innerText);
            }
            $('.total').text(total);
            console.log(total);
            $('.num-item').text(itemArray.length)
            $('.addbutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        let selectvalue = $this.siblings("select").val();
                        itemArray[i].num = selectvalue;
                        $this.siblings('div').find('.num').text(selectvalue);
                        break;
                    }
                }
                localStorage.setItem('items', JSON.stringify(itemArray));
            });
            $('.removebutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        itemArray.splice(i, 1);
                        if(itemArray.length === 0){
                            localStorage.removeItem('items');
                            $('.num-item').text(itemArray.length);
                        } else {
                            localStorage.setItem('items', JSON.stringify(itemArray));
                         
                        }
                        break;
                    }
                }
                createCards();
            })
        }
    }
});