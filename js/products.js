function initProducts() {
  var products = [
    {
      title: "Pelant jus de pommes à Sydre",
      category: "Produit de soif",
      caption: "Douceur développant les arômes primaires et doux épices des frutis à cidre. Au plaisir dès le petit déjeuner (viennoiserie et...) mais surtout mis en valeur sur bon nombre de desserts recherchés par exemple la tarte mandarine façon Alex Croquets à Wattignies...<br/>A vous de voir et boire",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre tendre",
      category: "Produit de soif",
      caption: "Cidre doux fruité acidulé aux arômes de pommes sauvages de l'automne. Peu alcoolisé - 3.5%/vol. <br/>S'accompagne parfaitement sur les desserts et viennoiserie",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut tendre",
      category: "Produit de soif",
      caption: "Cidre demi-sec de bel équilibre, fruit et matière, bon compromis entre le brut et le doux avec un peu de sucre résiduel - 5/vol<br/>Sur une cuisine simple pouvant accompagner tout le repas.",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut",
      category: "Produit de soif",
      caption: "Cidre classique sec, vif, acidulé et rafraichissant l'été - 7%/vol<br/>Charchuterie, volaille, abats",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre nouvelle vague",
      category: "Produit de soif",
      caption: "Cidre de \"soif\" en fût de 5L (1.5bar) et en 20L slimline (3 à 4 bars, derrière le comptoir).<br/>Au verre pétillant léger de table, au bar, au buffet, au picnic, en terrasse etc...<br/>Equilibre entre le brut et demi-sec accompagnant une multitiude de mets - 5%/vol",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré authentique",
      category: "Produit de soif",
      caption: "Poiré de soif demi-sec acidulé, robe pâle selon le millésime tout en fruit et fraîcheur - 4%/vol<br/>En apéritif, avec les produits de la mer et les fromages.",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sydre Argelette",
      category: "Grand Cru",
      caption: "L'Argelette, désignant le cailloux schisteux, est une cuvée complexe composée du maximum de variétés issues de vieux arbres dans le soucis de respecter le millésime.<br/>Sydre vineux de très bonne garde grâce à son équilibre entre matière, acidité, rondeur, ampleur et minéralité. - 5%/vol selon millésime",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré Granit",
      category: "Grand Cru",
      caption: "\"Granit\" définit la roche où les racines du poirier plongent dans les failles de granit. Le système racinaire en profondeur du poirier marque sa minéralité. Cet aspect est davantage présent sur cette cuvée issue d'arbres très anciens. Assemblage d'un maximum de variétés dans le respect du millésime - 4%/vol<br/>S'accompagne de la grande cuisine des produits nobles, en apéritif avant de grands vins blancs ou en fin de repas.",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Cormé",
      category: "Grand Cru",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sydre Glace",
      category: "Grand Cru",
      caption: "",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré Glace",
      category: "Grand Cru",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Calvados",
      category: "Grand Cru",
      caption: "",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    }
  ];

  var root = $( "#products");
  products.forEach(function(p) {
      root.append(toBrick(p));
  })
}

function toBrick(item) {
  return `<div class="masonry__brick" data-aos="fade-up">
    <div class="item-folio">
        <div class="item-folio__thumb">
            <a href="${item.detailsImage}" class="thumb-link" title="${item.title}" data-size="800x1200">
                <img src="${item.smallImage}" alt="">
            </a>
        </div>

        <div class="item-folio__text">
            <h3 class="item-folio__title">
                ${item.title}
            </h3>
            <p class="item-folio__cat">
                ${item.category}
            </p>
        </div>

        <a href="${item.seeMoreUrl}" class="item-folio__project-link" title="${item.seeMoreTitle}">
            <i class="icon-link"></i>
        </a>

        <div class="item-folio__caption">
            <p>${item.caption}</p>
        </div>

    </div>
</div>`;
}