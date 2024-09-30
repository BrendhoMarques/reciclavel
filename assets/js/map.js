

// Inicializa o mapa
var map = L.map('map').setView([-25.5120, -49.3318], 11); // Latitude e Longitude para Curitiba

// Adiciona a camada de tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona o ponto do Ecoponto CIC

// Adiciona outros pontos de coleta fictícios
var pontos = [
    {
        lat:  -25.5120, 
        lng: -49.3318,
        nome: "Ecoponto CIC",
        info: '<b>Endereço:</b> R. Orestes Thá, 1765<br><b>Materiais Aceitos:</b> Recebe resíduos de construção civil (caliça), madeiras, restos de podas de árvores e de limpeza de jardins; mobiliários inservíveis, recicláveis, eletroeletrônicos; óleo de cozinha e gordura já usados.<br> <img src="assets/css/img/ecoponto_cic.jpg" alt="Ecoponto CIC" width="100">'
    },

    {
        lat: -25.4610, 
        lng: -49.3463,
        nome: "Condor CIC",
        info: '<b>Endereço:</b> R. João Dembinski, 1410<br><b>Materiais Aceitos:</b> Lâmpadas e Baterias.<br> <img src="assets/css/img/Condor_Cic.jpg" alt="Condor Cic" width="100">'
    },

    {
        lat: -25.506295240060645,
        lng:  -49.329901735581835,  
        nome: "Estre",
        info: '<b>Endereço:</b> R. João Bettega, 5480<br><b>Materiais Aceitos:</b> móveis e eletrodomésticos usados, lâmpadas e pilhas etc. <br><img src="assets/css/img/COLETA_1.jpg" alt="Estre" width="100">'
    },

    {
        lat: -25.493062295762872,
        lng:   -49.324798643688865,  
        nome: "Condor João Bettega",
        info: '<b>Endereço:</b> R. João Bettega, 3930<br><b>Materiais Aceitos:</b> Lâmpadas e Baterias. <br> <img src="assets/css/img/Condor_Bettega.jpg" alt="Condor João Bettega" width="100">'
    }, 

    {
        lat: -25.454576083759065, 
        lng:   -49.34839322052305,  
        nome: "MAFREI FILIAL 4",
        info: '<b>Endereço:</b> R. João Dembinski, 689<br><b>Materiais Aceitos:</b> Lâmpadas e Baterias. <br> <img src="assets/css/img/Mafrei_Cic.jpg" alt="Condor João Bettega" width="100">'
    },

    {
        lat: -25.45570967095138, 
        lng:   -49.358811005523435,  
        nome: "Max Atacadista",
        info: '<b>Endereço:</b>Avenida Juscelino Kubitschek de Oliveira, 2651<br><b>Materiais Aceitos:</b> Lâmpadas e Baterias. <br> <img src="assets/css/img/Max_Cic.jpg" alt="Condor João Bettega" width="100">'
    }


    
];

pontos.forEach(function(ponto) {
    L.marker([ponto.lat, ponto.lng]).addTo(map)
        .bindPopup('<b>' + ponto.nome + '</b><br>' + ponto.info);
});

