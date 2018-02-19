function initMap() {
    var hauteville = { lat: 48.4258474, lng: -0.3985334 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: hauteville,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ]
    });
    var home = new google.maps.Marker({
        position: hauteville,
        map: map
    });

    // var breizhcafe = new google.maps.Marker({
    //     position: { lat: 48.8606888, lng: 2.3597017 },
    //     map: map
    // });
    var distributors = [
        { position: { lat: 37.8475623, lng: -122.2941855 }, title: 'Beaune imports', url: 'http://beauneimports.com', description: 'Beaune Imports is an importer and distributor of fine wines from France and Spain.', address: '1490 66th St, Emeryville, <br/>CA 94608, États-Unis', phone: '+1 510-653-1040', email: 'beauneimports@yahoo.com' },
        { position: { lat: 42.4248069, lng: -71.1459202 }, title: 'Ideal wine and spirits', url: 'http://idealwine.us' },
        { position: { lat: -33.8040006, lng: 151.1466824 }, title: 'Vintage and vine', url: 'http://vintageandvine.com' },
        { position: { lat: 48.8606888, lng: 2.3597017 }, title: 'Epicerie Breizh Café', url: 'https://breizhcafe.com/fr/epicerie-bretonne-paris-produits-bretons-table-hotes/' },
        { position: { lat: 35.6828028, lng: 139.7824298 }, title: 'Arcane Ltd', url: 'http://www.arcane-jp.com/'}
    ];

    distributors.map(function(d) {
        var marker =  new google.maps.Marker({
            position: d.position,
            map: map,
            title: d.title,
            animation: google.maps.Animation.DROP,
            // label: d.title
        });

        // var infowindow = new google.maps.InfoWindow({
        //     content: '<div id="content">'+
        //                 '<div id="siteNotice">'+
        //                 '</div>'+
        //                 '<h1 id="firstHeading" class="firstHeading">' + d.title +'</h1>'+
        //                 '<div id="bodyContent">'+
        //                     '<p>'+ d.description +
        //                     '</p>'+
        //                     '<p><a href="'+ d.url + '">'+
        //                         d.url+
        //                     '</p>'+
        //                 '</div>'+
        //             '</div>'
        // });
        // var infowindow = new google.maps.InfoWindow({
        //     content: '<div id="iw-container">' +
        //                 '<div class="iw-title">' + d.title +'</div>' +
        //                 '<div class="iw-content">' +
        //                     '<div class="iw-subTitle"></div>' +
        //                     '<p>' + d.description +'</p>' +
        //                     '<div class="iw-subTitle">Contacts</div>' +
        //                     '<p>'+d.title+
        //                     '<br>' + d.address +
        //                     '<br>Tel: <a href="tel:'+ d.phone + '">'+d.phone+'</a>'+ 
        //                     '<br>e-mail: <a href="mailto:'+ d.email + '">'+d.email+'</a>'+
        //                     '<br><a href="'+ d.url + '" target="_blank">'+d.url+'</a>'+
        //                 '</div>' +
        //                 '<div class="iw-bottom-gradient"></div>' +
        //             '</div>'});
        
        var infowindow = new google.maps.InfoWindow({
            content: '<div id="content">'+
                        '<h5>' + d.title +'</h5>'+
                        '<p>'+
                            '<span>' + d.description +'</span>' +
                            '<div class="iw-subTitle">Contacts</div>' +
                            '<br>' + d.title+
                            '<br>' + d.address +
                            '<br>Tel: <a href="tel:'+ d.phone + '">'+d.phone+'</a>'+ 
                            '<br>e-mail: <a href="mailto:'+ d.email + '">'+d.email+'</a>'+
                            '<br><a href="'+ d.url + '" target="_blank">'+d.url+'</a>'+
                        '</p>'+
                    '</div>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

    })
}