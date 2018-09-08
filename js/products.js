function initProducts() {
  var products = [
    {
      title: "Jus de pommes",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre tendre",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut tendre",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre nouvelle vague",
      category: "Produit de soif",
      caption: "",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré authentique",
      category: "Produit de soif",
      caption: "",
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
      caption: "",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produits/poire-granit-grand-cru.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré Granit",
      category: "Grand Cru",
      caption: "",
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
