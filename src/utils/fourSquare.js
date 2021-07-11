export const fourSquare_API = "https://api.foursquare.com/v2/venues/explore?&client_id=";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}
const v = formatDate(Date.now())

export async function loadPlaces(searchTerm){
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

 const response = await fetch(fourSquare_API + REACT_APP_CLIENT_ID + "&v=" + v + "&categoryId=4bf58dd8d48988d1c4941735&radius=5000&near="+ searchTerm + "&section=food&limit=15");
 const data = await response.json();
 console.log(data, "HONZA");
};



 