
function getApiProduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product', 
        method: 'GET',
        responseType: 'json',
    });

    
    promise.then(function (result) {
        console.log('result', result.data);
        
        renderProduct(result.data.content);
    });
    
    promise.catch(function (err) {
        console.log(err)
    })
}


window.onload = function () {
    
    getApiProduct();
    
}


 function renderProduct(arrProduct) { 
    var html = ''; 
    for (var i = 0; i < 6; i++) {
        var sp = arrProduct[i]; 
        html += `
        <div class="card" style="width: 334px" id="">
            <img src="${sp.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h1>${sp.name}</h1>
                <p class="card-text">${sp.shortDescription}</p>
            </div>
            <div class="card-footer">
            <a href="./detail.html?productid=${sp.id}">Buy now</a>
                <span>
                    ${sp.price}$
                <span>
            </div>
        </div>
        `;
    }
    document.querySelector('#list').innerHTML = html;
}
