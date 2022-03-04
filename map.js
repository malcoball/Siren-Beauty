function initMap(){
    let location = {
        lat : 53.09968,
        lng : -1.25075
    };
    let map = new google.maps.Map(document.querySelector("#map"),{
        zoom: 17,
        center: location,
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
    
}