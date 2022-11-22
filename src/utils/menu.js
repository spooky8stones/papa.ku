import Product from "./product.js";

export const products = {

    vegetarian: [

        new Product(1, 'Yasai', 35, './products/asai.jpg' , 0,
            ['Iceberg lettuce', 'Cucumber', 'Avocado', 'Carrot', 'Sweet pepper', 'Sesame', 'Pickled kohlrabi']),
        new Product(2, 'Paradise', 36, './products/paradise.jpg' , 0,
            ['Iceberg lettuce', 'Tomago', 'Cucumber', 'Avocado', 'Sweet potato']),
        new Product(3, 'Vegan', 38, './products/vegan.jpg' , 0,
            ['Iceberg lettuce', 'Cucumber', 'Carrot', 'Sweet potato', 'Avocado', 'Teriyaki', 'Spicy sauce']),
        new Product(4, 'Rio', 39,  './products/rio.jpg'  , 0,
            ['Iceberg lettuce', 'Tomago', 'Cucumber', 'Avocado', 'Sweet potato', 'Iritis', 'Guacamole sauce'])
    ],

    regular: [
        new Product(5, 'Dragon', 40,  './products/dragon.jpg'  , 0,
            ['Shrimp', 'Cucumber', 'Avocado', 'Tobiko', 'Eel', 'Teriyaki', 'Sesame']),
        new Product(6, 'Tokio', 39, './products/tokio.jpg' , 0,
            ['Salmon', 'Cucumber', 'Leek', 'Avocado', 'Tuna', 'Iritis']),
        new Product(7, 'Samurai', 39,  './products/samurai.jpg'  , 0,
            ['Salmon', 'Avocado', 'Cream cheese', 'Cucumber', 'Salmon caviar' ]),
        new Product(8, 'Dynamite', 39,  './products/dynamite.jpg'  , 0,
            ['Baked salmon', 'Cucumber', 'Pickled kohlrabi', 'Avocado']),
        new Product(9, 'Canada', 40, './products/canada.jpg' , 0,
            ['Cream cheese', 'Avocado', 'Cucumber', 'Eel', 'Salmon', 'Shrimp', 'Tuna']),
        new Product(10, 'California', 39, './products/california.jpg' , 0,
            ['Shrimp', 'Salmon', 'Cucumber', 'Avocado', 'Tobiko']),
        new Product(11, 'Sunset', 38, './products/sunrise.jpg' , 0,
            ['Sweet potato', 'Avocado', 'Baked salmon', 'Fried salmon', 'Spicy sauce', 'Teriyaki', 'Irite']),
        new Product(12, 'Philadelphia', 38, './products/philadelphia.jpg' , 0,
            ['Cream cheese', 'Cucumber', 'Avocado', 'Green onion', 'Salmon']),
        new Product(13, 'Alaska', 39,  './products/alaska.jpg'  , 0,
            ['Cream cheese', 'Cucumber', 'Salmon', 'Avocado', 'Shrimps']),
        new Product(14, 'Green', 39,  './products/green.jpg'  , 0,
            ['Cucumber', 'Avocado', 'Salmon', 'Tuna', 'Iritis'])
    ],

    set: [
        new Product(15, 'Okinawa', 160,  './products/Okinawa.jpg'  , 0, ['Maki salmon', 'Yasai', 'Green', 'California', 'Philadelphia']),
        new Product(16, 'Sakura', 120,  './products/sakura.jpg'  , 0, ['Avocado and sweet potato sandwich', 'Avocado maki', 'Yasai', 'Paradise'])
    ],

    doneButtons:
        {
            remove: 'remove',
            buy: 'add',
            order: 'order'
        },

    check:
        {
            info: 'Your Check',
            passport: 'id',
            id: 'Order number',
            date: 'Date',
            item: 'Name',
            number: 'Amount',
            price: 'Price',
            amount: 'Total',
            sale: 'Discount',
            topay: 'To pay'
        }
}


export const categoryNames = {
    vegetarian: 'Vegetarian',
    regular: 'Special',
    set: 'Combo',
    // salads: 'salads',
    // nigiri: 'nigiri',
    // maki: 'maki',
    // sushi: 'gunkan',
    // sandwiches: 'sandwiches'
}



