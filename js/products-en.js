function initProducts() {
  var products = [
    {
      title: "PERLANT / Cider apple juice ",
      category: "Thirst quenching - 330ml ou 750ml",
      caption: "Full of the gently sweet and spicy aromas of cider apples.  Delicious for breakfast (with pastries, etc..) but above all with a large number of desserts such as mandarin tarte from Alex Croquet in Wattignies..  Taste for yourself and see...",
      smallImage: "images/produits/pomme-perlant.jpg",
      detailsImage: "images/produits/pomme-perlant-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "SIDRE NOUVELLE VAGUE",
      category: "Thirst quenching - 330ml, fût 5L ou 20L",
      caption: "Thirst quenching sidre in 5l kegs or 20l slimline for bars and pubs (3-4 bars pressure). Lightly sparkling to be drunk during a meal, at a buffet, picnic, on a sunny terrace, in a pub… <br/>A good balance between dry and medium cider which will go with a wide range of dishes.",
      smallImage: "images/produits/sidre-nouvelle-vague.jpg",
      detailsImage: "images/produits/sidre-nouvelle-vague-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "SIDRE TENDRE",
      category: "Thirst quenching - 750ml",
      caption: "Sweet, fruity and slightly acidic aromas of wild autumn apples. Lightly alcoholic <small>(3.5%)</small>.<br/>Perfect with puddings and pastries.",
      smallImage: "images/produits/sidre-tendre.jpg",
      detailsImage: "images/produits/sidre-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "SIDRE BRUT TENDRE",
      category: "Thirst quenching - 750ml",
      caption: "Semi-dry, cider with a good balance between fruit and matter. A good compromise between Brut and Tendre with a little residual sugar – 5% vol<br/> With simple cuisine its can be drunk throughout the meal",
      smallImage: "images/produits/sidre-brut-tendre.jpg",
      detailsImage: "images/produits/sidre-brut-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "SIDRE BRUT",
      category: "Thirst quenching - 750ml",
      caption: "The classic extra dry cider ,small>(7%)</small>. Ideal with charcuterie and cold meats.",
      smallImage: "images/produits/sidre-brut.jpg",
      detailsImage: "images/produits/sidre-brut-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "POIRÉ 33cl",
      category: "Thirst quenching - 330ml",
      caption: "Thirst quenching semi dry perry, which depending on the year is more or less pale, fresh and fruity <small>(4%)</small>. <br/>Ideal for an aperitif, with sea food and cheese.",
      smallImage: "images/produits/poire-33.jpg",
      detailsImage: "images/produits/poire-33-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "POIRÉ AUTHENTIQUE",
      category: "With traditional cuisine - 750ml and magnum1500ml",
      caption: "Thirst quenching semi dry perry, which depending on the year is more or less pale, fresh and fruity <small>(4%)</small>. <br/>Ideal for an aperitif, with sea food and cheese.",
      smallImage: "images/produits/poire-authentique.jpg",
      detailsImage: "images/produits/poire-authentique-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    // {
    //   title: "Poiré",
    //   category: "Thirst quenching - 330ml",
    //   caption: "",
    //   smallImage: "images/produits/poire-authentique.jpg",
    //   detailsImage: "images/produits/poire-authentique-details.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "SYDRE ARGELETTE",
      category: "Gastronomic - 750ml and magnum1500ml",
      caption: "Argelette, named after the stony schist found locally, is a complex blend and made from the maximum amount of varieties, from the oldest trees that particular year has to offer.<br/>A vinous sydre which keeps well thanks to its balance between matter, acidity, roundness and minerality. <small>(5% depending on the vintage)</small>.",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "POIRÉ GRANIT",
      category: "Gastronomic - 750ml and magnum1500ml",
      caption: "Granit after the granite seams that the roots of the pear trees stretch down to reach. The deep root system of the pear tree gives it its minerality. This is ever more present in this cuvée which is made from the oldest trees. Made from the maximum amount of varieties available depending on the vintage <small>(4%)</small>. <br/>Ideal with fine cuisines, fine foods, as an aperitif before fine white wines or at the end of a meal.",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "CORMÉ",
      category: "Gastronomic - 500ml",
      caption: "A family made drink from the region of Maine dating back to the 15<sup>th</sup> century which fell out of favour in the 1950s and brought back up to date by Domaine Eric Bordelet. <br/>Made from several varieties of Corme.",
      smallImage: "images/produits/corme-banner.jpg",
      detailsImage: "images/produits/corme-details.jpg",
      seeMoreUrl: "/corme-en.html",
      seeMoreTitle: ""
    },
    // {
    //   title: "Sydre Glace",
    //   category: "Gastronomie",
    //   caption: "En vieillissement",
    //   smallImage: "images/produits/poire-granit-grand-cru.jpg",
    //   detailsImage: "images/produits/poire-granit-grand-cru.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    // {
    //   title: "Poiré Glace",
    //   category: "Gastronomie",
    //   caption: "En vieillissement",
    //   smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
    //   detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "Calvados",
      category: "Gastronomic",
      caption: "Aged in barrels in an underground cellar.",
      smallImage: "images/produits/calvados.jpg",
      detailsImage: "images/produits/calvados-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    }
  ];

  var root = $("#products");
  products.forEach(function(p) {
      root.append(toBrick(p));
  })
}

function seeMoreLink(item) {
  if (item.seeMoreUrl) {
    return [
      '      <a href="' + item.seeMoreUrl +'" class="item-folio__project-link" title="' + item.seeMoreTitle + '">',
      '          <i class="icon-link"></i>',
      '      </a>'].join('');
  } else {
    return '';
  }
}

function toBrick(item) {
  return [
      '<div class="masonry__brick" data-aos="fade-up">',
      '  <div class="item-folio" itemscope itemtype="http://schema.org/Product">',
      '      <div class="item-folio__thumb">',
      '          <a href="' + item.detailsImage + '" class="thumb-link" title="' + item.title + '" data-size="800x1200">',
      '              <img src="' + item.smallImage + '" alt="" itemprop="image">',
      '          </a>',
      '      </div>',
      '      <div class="item-folio__text">',
      '          <h3 class="item-folio__title" itemprop="name">',
      '              ' + item.title + '',
      '          </h3>',
      '          <p class="item-folio__cat">',
      '              ' + item.category + '',
      '          </p>',
      '      </div>',
            seeMoreLink(item),
      '      <div class="item-folio__caption">',
      '          <p itemprop="description">' + item.caption + (item.seeMoreUrl ? '<br/><a href="' + item.seeMoreUrl+ '">Technical sheet</a>': '') + '</p>',
      ,
      '      </div>',
      '  </div>',
      '</div>'
    ].join('');
}

