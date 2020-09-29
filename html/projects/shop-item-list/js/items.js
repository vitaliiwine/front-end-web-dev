const items = [
    {
        title: 'test title 1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: '199',
        new: true,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 2',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: null,
        new: false,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 3',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '125',
        discountCost: null,
        new: true,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 4',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '111',
        discountCost: '90',
        new: false,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 5',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: null,
        new: true,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 6',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: null,
        new: true,
        img: '/img/img_product.png',
    },
    {
    title: 'test title 7',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    cost: '249',
    discountCost: null,
    new: false,
    img: '/img/img_product.png',
    },
    {
        title: 'test title 8',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: null,
        new: false,
        img: '/img/img_product.png',
    },
    {
        title: 'test title 9',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: '249',
        discountCost: null,
        new: false,
        img: '/img/img_product.png',
    },
];

function ifNew(item) {
    if (item.new) {
        return `     
    <div class="col-sm-6 bg-danger text-white mx-auto">
        <p class="text-center my-1">NEW</p>
    </div>
        `
    } else return `
        <div></div>
       `
}

function ifOnSale(item) {
    if (item.discountCost !== null) {
        return `
    <div class="col-sm-6 bg-dark text-white mx-auto">
        <p class="text-center my-1">SALE</p>
    </div>
        `
    } else return `
        <div></div>
    `
}

function showDiscount(item) {
    if (item.discountCost !== null) {
        return `
            <h4><del>${item.cost}</del></h4>
            <h4>${item.discountCost}</h4>
        `
    } else {
        return `
            <h4>${item.cost}</h4>
        `
    }
}

function createShopItem(item) {
    return `
        <div class="col-lg-4 col-md-6 mb-4 pt-4">
                    <div id="card" class="card">
                        <a href="#"><img class="card-img-top" src="img/img_product.png" alt="item image"></a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">${item.title}</a>
                            </h4>
                            <p class="card-text">${item.description}</p>
                            ${showDiscount(item)}
                            <div class="row">  
                            ${ifNew(item)}  
                            ${ifOnSale(item)}  
                            </div>                
                            <div class="row mt-4">
                                <div class="col-sm-6">
                                    <button class="btn btn-outline-primary mx-0">ADD TO CART</button>
                                </div>
                                <div class="col-sm-6">
                                    <button class="btn btn-secondary w-100">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
}

document.querySelector('.row').innerHTML = items.map(item => createShopItem(item)).join('');
