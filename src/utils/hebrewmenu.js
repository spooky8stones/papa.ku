import Product from "./product.js";

export const products = {

    vegetarian: [

        new Product(1, 'יאסאי', 35, './products/asai.jpg' , 0,
            ['אייסברג', 'מלפפון', 'אבוקדו', 'גזר', 'פלפל מתוק', 'שומשום', 'קולרבי כבוש']),
        new Product(2, 'פרדייס', 36, './products/paradise.jpg' , 0,
            ['חסה אייסברג', 'עגבנייה', 'מלפפון', 'אבוקדו', 'בטטה']),
        new Product(3, 'Vegan', 38, './products/vegan.jpg' , 0,
            ['אייסברג', 'מלפפון', 'גזר', 'ים', 'אבוקדו', 'טריאקי', 'רוטב חריף']),
        new Product(4, 'ריו', 39,  './products/rio.jpg'  , 0,
            ['חסה אייסברג', 'עגבנייה', 'מלפפון', 'אבוקדו', 'בטטה', 'איריטיס', 'רוטב גוואקמולי'])
    ],

    regular: [
        new Product(5, 'דרקון', 40,  './products/dragon.jpg'  , 0,
            ['שרימפס', 'מלפפון', 'אבוקדו', 'טוביקו', 'צלופח', 'טריאקי', 'שומשום']),
        new Product(6, 'טוקיו', 39, './products/tokio.jpg' , 0,
            ['סלמון', 'מלפפון', 'כרישה', 'אבוקדו', 'טונה', 'איריטיס']),
        new Product(7, 'סמוראי', 39,  './products/samurai.jpg'  , 0,
            ['סלמון', 'אבוקדו', 'גבינת שמנת', 'מלפפון', 'קוויאר סלמון']),
        new Product(8, 'Dynamite', 39,  './products/dynamite.jpg'  , 0,
            ['סלמון אפוי', 'מלפפון', 'קולרבי כבוש', 'אבוקדו']),
        new Product(9, 'קנדה', 40, './products/canada.jpg' , 0,
            ['גבינת שמנת', 'אבוקדו', 'מלפפון', 'צלופח', 'סלמון', 'שרימפס', 'טונה']),
        new Product(10, 'קליפורניה', 39, './products/california.jpg' , 0,
            ['שרימפס', 'סלמון', 'מלפפון', 'אבוקדו', 'טוביקו']),
        new Product(11, 'Sunset', 38, './products/sunset_reduct.jpg' , 0,
            ['בטטה', 'אבוקדו', 'סלמון אפוי', 'סלמון מטוגן', 'רוטב חריף', 'טריאקי', 'עירית']),
        new Product(12, 'פילדלפיה', 38, './products/philadelphia.jpg' , 0,
            ['גבינת שמנת', 'מלפפון', 'אבוקדו', 'בצל ירוק', 'סלמון']),
        new Product(13, 'אלסקה', 39,  './products/alaska.jpg'  , 0,
            ['גבינת שמנת', 'מלפפון', 'סלמון', 'אבוקדו', 'שרימפס']),
        new Product(14, 'Green', 39,  './products/green.jpg'  , 0,
            ['מלפפון', 'אבוקדו', 'סלמון', 'טונה', 'איריטיס'])
    ],

    set: [
        new Product(15, 'אוקינאווה', 160,  './products/Okinawa.jpg'  , 0, ['מאקי סלמון', 'יסאי', 'Green', 'קליפורניה', 'פילדלפיה']),
        new Product(16, 'סאקורה', 120,  './products/sakura.jpg'  , 0, ['כריך אבוקדו ובטטה', 'פרגי אבוקדו', 'יסאי', 'גן עדן'])
    ],

    doneButtons:
        {
            remove: 'ביטל',
            buy: 'בחר',
            order: 'להזמין'
        },

        check:
            {
              info: 'חשבונית לתשלום',
                passport: 'ת.ז',
                id: 'מספר הזמנה',
                date: 'התאריך',
                item: 'שם',
                number: 'כמות',
                price: 'מחיר',
                amount: 'סך הכל',
                sale: 'הנחה',
                topay: 'לשלם'
            }
}



export const categoryNames = {
    vegetarian: 'צמוני',
    regular: 'ספיישלים',
    set: 'מורכבת',
    // salads: 'salads',
    // nigiri: 'nigiri',
    // maki: 'maki',
    // sushi: 'gunkan',
    // sandwiches: 'sandwiches'
}



