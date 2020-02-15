

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: './img/product-1.png',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy',
        image: './img/product-2.png',
        description: 'Sản phẩm của Samsung',
        price: 400,
        inventory: 5,
        rating: 3
    },
    {
        id: 3,
        name: 'Sony XZ10',
        image: './img/product-3.png',
        description: 'Sản phẩm của Sony',
        price: 600,
        inventory: 60,
        rating: 2
    },
]

const products = (state = initialState, action) => {
    switch(action.type) {
        

        default: return [...state];
    }
}

export default products
