export default  class Map {
  init() {
    const mymap = L.map('mapid').setView([53.9, 27.56], 13);
  
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoieWFrLWdqZW4iLCJhIjoiY2szY3Q5OXQwMHlubTNtbXJ3cDk5MGJsciJ9.Ed982I0PGzA2oZl7YM_Peg'
    }).addTo(mymap);
  
    const marker = L.marker([53.9, 27.56]).addTo(mymap);
  
    marker.bindPopup('Here is Minsk!');
  }
}
