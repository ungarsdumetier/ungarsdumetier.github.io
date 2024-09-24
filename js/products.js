function initProducts() {
  var products = [
    {
      title: "Perlant jus de pommes à Sydre",
      category: "75cl et 33cl",
      caption: "Douceur développant les arômes primaires et doux épices des pommes à sydre. Au  plaisir dès le petit déjeuner (viennoiserie…) mais surtout mis en valeur sur bon  nombre de desserts recherchés par exemple la tarte mandarine façon Alex Croquet  à Wattignies. A vous de voir et boire !",
      smallImage: "images/produits/pomme-perlant.jpg",
      detailsImage: "images/produits/pomme-perlant-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre nouvelle vague",
      category: "330ml ou fût de 20L",
      caption: "Sidre de \"soif\" en fût de 5L (1.5bar) et en 20L slimline (3 à 4 bars, derrière le comptoir).<br/>Au verre pétillant léger de table, au bar, au buffet, au picnic, en terrasse etc...<br/>Equilibre entre le brut et demi-sec accompagnant une multitiude de mets - <small>(5%/vol)</small>",
      smallImage: "images/produits/sidre-nouvelle-vague.jpg",
      detailsImage: "images/produits/sidre-nouvelle-vague-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre tendre",
      category: "Produit de soif - 750ml",
      caption: "Cidre tendre fruité aux arômes primaires de pommes à cidre épicées.<br/>Accompagnement idéal avec les desserts et les viennoiseries.",
      smallImage: "images/produits/sidre-tendre.jpg",
      detailsImage: "images/produits/sidre-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut tendre",
      category: "Produit de soif - 750ml",
      caption: " Cidre demi-sec avec un bel équilibre fruit et matière, un bon compromis entre le brut et le tendre avec peu de sucre résiduel.<br/>Sur une cuisine simple pouvant accompagner tout le repas.",
      smallImage: "images/produits/sidre-brut-tendre.jpg",
      detailsImage: "images/produits/sidre-brut-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut",
      category: "Produit de soif - 750ml",
      caption: "Cidre classique de soif, sec, vif, acidulé et rafraîchissant. Cidre de bonne garde. Accompagnement idéal avec de la charcuterie, des volailles ou des abats.",
      smallImage: "images/produits/sidre-brut.jpg",
      detailsImage: "images/produits/sidre-brut-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré 33cl",
      category: "Produit de soif - 330ml",
      caption: "Poiré de soif demi-sec, acidulé avec une robe pâle, tout en fruit et fraîcheur. Accompagnement idéal en apéritif, avec les produits de la mer et les fromages.",
      smallImage: "images/produits/poire-33.jpg",
      detailsImage: "images/produits/poire-33-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré authentique",
      category: "Produit de soif 750ml et magnum 1500ml",
      caption: "Poiré classique de soif, acidulé, sur le fruit (poires à poiré) et la fraîcheur. Robe pâle telle un chenin.<br/>Accompagnement idéal en apéritif, avec les produits de la mer ou les fromages (chèvres et fromages d’Auvergne).",
      smallImage: "images/produits/poire-authentique.jpg",
      detailsImage: "images/produits/poire-authentique-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    // {
    //   title: "Poiré",
    //   category: "Produit de soif - 330ml",
    //   caption: "",
    //   smallImage: "images/produits/poire-authentique.jpg",
    //   detailsImage: "images/produits/poire-authentique-details.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "Sydre Argelette",
      category: "Gastronomie - 750ml et magnum 1500ml",
      caption: "Nom donné par les « Anciens », l’argelette désigne le caillou schisteux rouge (fer).  Cuvée gastronomique complexe composée d’un maximum de variétés amères,douces et acidulées, de manière identique chaque année avec pour seule nuance, le millésime (température, luminosité, etc.). Cidre vineux de grande garde grâce à son équilibre.<br/>Accompagnement idéal avec des produits nobles aux « touchés » crémeux, doux  épicés, des saveurs aigres- douces, des fromages et des desserts aux beurre,vanille, caramel, chocolat…",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré Granit",
      category: "Gastronomie - 750ml et magnum 1500ml",
      caption: "Roche métamorphique (granit et schiste), le granit est issu du massif armoricain du  Briovérien qui définit le sous-sol d’environ 200 m de large (mi-pente). Le système  racinaire du poirier, allant en profondeur en pivot (1- 2) marque le poiré de son intense minéralité et de sa singularité (patrimoine végétal unique avec des arbres tricentenaires) que l’on retrouve dans notre région sud-Manche, ouest-Orne et  nord-Mayenne. Poirification identique à la sydrification du Sydre argelette avec un assemblage d’un maximum de variétés et une nuance chaque année, liée au millésime. Poiré vineux, crémeux par sa complexité (et non résiduel) et de très grande garde.<br/> Accompagnement idéal en apéritif avant de grands vins blancs, en fin de repas ou avec des produits de la mer. À cela, s’ajoute également les accords du sydre argelette et laisse aussi libre cours à la découverte.",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Cormé",
      category: "Gastronomie - 500ml",
      caption: "BBoisson du Maine du 15ème siècle produite familialement jusqu’aux années 5. et remis à la technique du jour du Domaine Eric Bordelet avec 12 variétés de cormes.",
      smallImage: "images/produits/corme-banner.jpg",
      detailsImage: "images/produits/corme-details.jpg",
      seeMoreUrl: "/corme.html",
      seeMoreTitle: ""
    },
    {
      title: "Calvados Argelette",
      category: "Gastronomie - 500ml",
      caption: "",
      smallImage: "images/produits/calvados-argelette.jpg",
      detailsImage: "images/produits/calvados-argelette-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Calvados Granit",
      category: "Gastronomie - 500ml",
      caption: "",
      smallImage: "images/produits/calvados-granit.jpg",
      detailsImage: "images/produits/calvados-granit-details.jpg",
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
      '          <p itemprop="description">' + item.caption + (item.seeMoreUrl ? '<br/><a href="' + item.seeMoreUrl+ '">Fiche technique</a>': '') + '</p>',
      ,
      '      </div>',
      '  </div>',
      '</div>'
    ].join('');
}

