var data = {
    maximum: 99,
    products: [
        {
            "id": "532",
            "name": "Slicker Jacket",
            "description": "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
            "price": "125",
            "image_title": "slicker-jacket_lynda_29941",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"
        },
        {
            "name": "Bamboo Thermal Ski Coat",
            "description": "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg",
            "price": 99
        },
        {
            "id": "516",
            "name": "Unisex Thermal Vest",
            "description": "Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
            "price": "95",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg"
        }
    ]
}
var app = new Vue({
    el: '#app',
    data: data
})