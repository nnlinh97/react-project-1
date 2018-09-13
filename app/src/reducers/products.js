
let initialState = [
    {
        id: 1,
        name: "iphone 7 plus",
        price: 799,
        status: true
    },
    {
        id: 2,
        name: "samsung galaxy s8",
        price: 899,
        status: false
    },
    {
        id: 3,
        name: "sony z3",
        price: 499,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;