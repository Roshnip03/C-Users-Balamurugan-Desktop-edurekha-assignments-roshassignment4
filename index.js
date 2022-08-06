let ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4}, 
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
    ratingData = ratingData.sort((a,b ) =>{
        a= a.restaurant;
        b= b.restaurant;
        if( b < a) return  1;
        if (b > a) return -1;
        });

        let restaurant ="";
        let averageData =[];

        ratingData.forEach((value) => {
if (restaurant === value.restaurant){
    let index = averageData.length -1;
    averageData[ index].rating +=value.rating;
    averageData[index].count++;

}else{
restaurant =value.restaurant;
averageData.push({ ...value,count:1 }  )

}
});
averageData =averageData.map( (value ) => {

return { restaurant : value.restaurant,rating: value.rating / value.count };
});
let filterData =averageData.filter((value) =>{
    return value.rating >= 4 ;
});
console.log( averageData);
console.log(filterData);
