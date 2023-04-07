// pizza dataset
const pizzaData = [
    {
        "first-name": "Chris",
        "pizza-shop-name": "Ben's Pizza",
        "place": "the Village",
        "longitude": -74.000288,
        "latitude": 40.730412,
        "program": "MUP"
    },
    {
        "first-name": "Max",
        "pizza-shop-name": "Lou Malnati's Pizzeria",
        "place": "Chicago",
        "longitude": -87.63368899,
        "latitude": 41.89067478,
        "program": "MSDS"
    },
    {
        "first-name": "Christina",
        "pizza-shop-name": "Pie-Eyed Pizzeria",
        "place": "Chicago",
        "longitude": -87.65571,
        "latitude": 41.89619,
        "program": "MUP"
    },
    {
        "first-name": "Nate",
        "pizza-shop-name": "Pizza Suprema",
        "place": "Midtown",
        "longitude": -73.995163,
        "latitude": 40.75063,
        "program": "MSPP"
    },
    {
        "first-name": "Patrick",
        "pizza-shop-name": "Patsy's",
        "place": "East Harlem",
        "longitude": -73.93486712,
        "latitude": 40.797137,
        "program": "MUP"
    },
    {
        "first-name": "Evan",
        "pizza-shop-name": "Rosa's",
        "place": "Ridgewood",
        "longitude": -73.900092,
        "latitude": 40.712197,
        "program": "MUP"
    },
    {
        "first-name": "Aisha",
        "pizza-shop-name": "Christian's Pizza",
        "place": "Charlottesville",
        "longitude": -78.48223019,
        "latitude": 38.0310708,
        "program": "MUP"
    },
    {
        "first-name": "Luke",
        "pizza-shop-name": "Pica's ",
        "place": "Philadelphia",
        "longitude": -75.27540655,
        "latitude": 39.96583696,
        "program": "MUP"
    },
    {
        "first-name": "Ritwick",
        "pizza-shop-name": "Percy's",
        "place": "Greenwich Village",
        "longitude": -74.00138792,
        "latitude": 40.72933278,
        "program": "MUP"
    },
    {
        "first-name": "Whitney",
        "pizza-shop-name": "Piz-zetta ",
        "place": "Downtown Brooklyn",
        "longitude": -73.9907819,
        "latitude": 40.69243875,
        "program": "EMPA"
    },
    {
        "first-name": "Becky",
        "pizza-shop-name": "Prince Street Pizza",
        "place": "SOHO",
        "longitude": -73.99454946,
        "latitude": 40.72388084,
        "program": "ITP"
    },
    {
        "first-name": "Yu Ze",
        "pizza-shop-name": "Mama's TOO!",
        "place": "Upper West Side",
        "longitude": -73.96760083,
        "latitude": 40.80101105,
        "program": "CUSP"
    },
    {
        "first-name": "Anna ",
        "pizza-shop-name": "John's of Bleecker ",
        "place": "Greenwich Village ",
        "longitude": -74.00337035,
        "latitude": 40.73170071,
        "program": "CUSP"
    },
    {
        "first-name": "Camille ",
        "pizza-shop-name": "John's of Bleecker ",
        "place": "Greenwich Village ",
        "longitude": -74.00337035,
        "latitude": 40.73170071,
        "program": "MUP"
    },
    {
        "first-name": "Bria",
        "pizza-shop-name": "San Matteo",
        "place": "Upper East Side",
        "longitude": -73.95487,
        "latitude": 40.77398,
        "program": "MPA"
    },
    {
        "first-name": "Chloe",
        "pizza-shop-name": "Village Square Pizza",
        "place": "East Village",
        "longitude": -73.98279206,
        "latitude": 40.72768156,
        "program": "MSDS"
    },
    {
        "first-name": "Karen",
        "pizza-shop-name": "Annie's Italian restaurant",
        "place": "Beijing",
        "longitude": 116.43731,
        "latitude": 39.91891,
        "program": "MUP"
    }
]


mapboxgl.accessToken = 'pk.eyJ1Ijoia2h5MjM2IiwiYSI6ImNsZzVxYTVnNDA1d2kzZW45b3l5d280N3oifQ.GqfNX5HwLaA5utEN2iQkXg';

const NYC_COORDINATES = [-74.00413, 40.67024]

const GOWANUS_WHOLEFOODS = [-73.98877, 40.67488]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 10, // starting zoom
    pitch: 15
});


// real markers 

pizzaData.forEach(function (pizzaRecord) {

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${pizzaRecord['pizza-shop-name']}`
    );

    // marker color based on program
    if (pizzaRecord.program === 'MUP') {
        color = '#FC2F03'
    } else {
        color = '#ffffff'
    }


    // marker for gowanus whole foods (GWF)
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(popup) // sets popup for marker
        .addTo(map);
})


$('fly-to-beijing').on('click', function() {
    console.log("x"),
    map.flyTo({
        center: [116.45822, 40.25576],
        essential: true
    })
})




/* DUMMY MARKERS

// map center point
const marker1 = new mapboxgl.Marker()
    .setLngLat(NYC_COORDINATES)
    .addTo(map);

// create popup for GWF marker
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Gowanus Whole Foods'
);

// marker for gowanus whole foods (GWF)
    const marker2 = new mapboxgl.Marker()
    .setLngLat(GOWANUS_WHOLEFOODS)
    .setPopup(popup) // sets popup for marker
    .addTo(map);

    */
