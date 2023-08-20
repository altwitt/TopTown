window.initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.0, lng: -89.0 },
    zoom: 5,
  });
};
