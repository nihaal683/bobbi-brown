var bonusData = [
    {image:"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/21647751_fpx.tif",name:"LONG-WEAR CREAM SHADOW STICK Our ultimate quick eye shadow stick",price:"$1,099.99",save:"$900",wasPrice:"$1,999.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg",name:"VITAMIN ENRICHED FACE BASE Multitasking, moisturizing primer",price:"$79.99",save:"$100",wasPrice:"$179.99"},
    {image:"https://cdn02.nnnow.com/web-images/large/styles/JLNCR1RHNYZ/1586177010539/1.jpg",name:"KIN LONG-WEAR WEIGHTLESS FOUNDATION SPF 15",price:"89.99",save:"$9.99",wasPrice:"$299.99"},
    {image:"https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/280290/bobbi-brown-skin-corrector-stick-dark-peach_1_display_1649394732_20df7fbd.jpg",name:"SKIN CORRECTOR STICK Discoloration neutralizer for undereyes & face",price:"$79.99",save:"$25",wasPrice:"$104.99"},
    {image:"https://m.bobbibrowncosmetics.ca/media/export/cms/products/v2_1080x1080/bb_sku_ET5K11_1080x1080_0.jpg",name:"SKIN WEIGHTLESS POWDER FOUNDATION Silky, oil-free powder formula",price:"$68.49",save:"$24",wasPrice:"$92.49"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_ENHM04_1080x1080_0.jpg",name:"SKIN LONG-WEAR FLUID POWDER FOUNDATION SPF 20 Hybrid liquid-to-powder foundation",price:"$329.99",save:"$187",wasPrice:"$516.99"},
    {image:"https://cdn03.nnnow.com/web-images/large/styles/A8IL3DGTY0N/1609912887238/1.jpg",name:"SHEER FINISH PRESSED POWDER Oil-absorbing powder",price:"59.99",save:"$30",wasPrice:"$89.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EHP201_1080x1080_0.jpg",name:"EXTRA ILLUMINATING MOISTURE BALM Glow-amplifying moisturizer",price:"$259.99",save:"$640",wasPrice:"$899.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96N01_600x600_0.jpg",name:"PRIMER PLUS PROTECTION SPF 50 Protective face prime",price:"$34.99",save:"$35",wasPrice:"$69.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/415x415/bb_prod_EH21_415x415_0.jpg",name:"CRUSHED LIP COLOR Playful, effortless color",price:"$149.99",save:"$30",wasPrice:"$179.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg",name:"SOOTHING CLEANSING OIL Makeup remover and cleanser",price:"$89.99",save:"$89.99",wasPrice:"$299.99"},
    {image:"https://m.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EMCK02_1080x1080_0.jpg",name:"CRUSHED OIL-INFUSED GLOSS Hydrating, non-sticky lip gloss",price:"22.99",save:"Save $17",wasPrice:"wasPrice $39.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E9TN01_1080x1080_0.jpg",name:"SMOKEY EYE MASCARA Long-wearing, volumizing mascara",price:"$19.99",save:"$10",wasPrice:"wasPrice $29.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EFX201_1080x1080_0.jpg",name:"SKIN CLARIFIER NO. 75 Concentrated pore-clarifying treatment",price:"$79.99",save:"$100",wasPrice:"wasPrice $179.99"},
    {image:"https://m.media-amazon.com/images/I/41OGyJYWFfS.jpg",name:"LONG-WEAR GEL EYELINER Waterproof, no-smudge eyeliner",price:"$204.99",save:"$145.99",wasPrice:"wasPrice $349.99"},
    {image:"https://m.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH201_600x600_0.jpg",name:"MINI HIGHLIGHTING POWDER Pearlescent Glow on the Go",price:"$89.99",save:"$89.99",WasPrice:"wasPrice $299.99"}
]

var arrObj = JSON.parse(localStorage.getItem("cartData")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });

    var bonusBox = document.createElement("div");

    var x = document.querySelector("#bonus-deals");

    bonusBox.append(img,name,price,savePrice,wasPrice,btn);
    x.append(bonusBox);


})

function mufunction(elem)
{
    alert("Item added to cart");
    arrObj.push(elem);
    // console.log(arrObj)
    localStorage.setItem("cartData",JSON.stringify(arrObj));
}






var sliderData = [
    {imageItem:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E7YW01_600x600_0.jpg;maxHeight=140;maxWidth=140",Itemname:"SOOTHING CLEANSING OIL Makeup remover and cleanser",},
    {imageItem:"https://m.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EMCK02_1080x1080_0.jpg;maxHeight=140;maxWidth=140",Itemname:"CRUSHED OIL-INFUSED GLOSS Hydrating, non-sticky lip gloss",},
    {imageItem:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg;maxHeight=140;maxWidth=140",Itemname:"HYDRATING FACE CREAM Rich yet lightweight moisturizer",},
    {imageItem:"https://cdn-cf.ipsy.com/contentAsset/image/8551a55c-bafd-490e-8a0b-beb6b6d9c017/fileAsset?byInode=1;maxHeight=140;maxWidth=140",Itemname:"LONG-WEAR GEL EYELINER Waterproof, no-smudge eyeliner",},
    {imageItem:"https://m.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ET0001_600x600_0.jpg;maxHeight=140;maxWidth=140",Itemname:"MINI VITAMIN ENRICHED FACE BASE Oil-free moisturizer and primer",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408356_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Headphones",}, 
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494419_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Cell Phones",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403872_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Tablets",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6168/6168626_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Major Appliances",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850410_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Small Kitchen Appliances",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443974_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"PC Gaming",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454650_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Sound Bars & Speakers",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451018_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Cameras & Camcorders",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464601cv13d.jpg;maxHeight=140;maxWidth=140",Itemname:"Wearable Technology",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461319_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Smart Home & Networking",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404066_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Floor Care & Home Air Quality",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482794_sa.jpg;maxHeight=140;maxWidth=140",Itemname:"Movies & Music",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427196_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Fitness & Recovery",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459273_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Personal Care & Beauty",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483736_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Health & Wellness",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6480/6480937_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Video & Streaming Media PLayer",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377570_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Electric Transportation & Recreation",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6423/6423125_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Home & Outdoor",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6319/6319479_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Car Electronics & GPS",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495444_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Toys, Games & Collectibles",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428776_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Baby Care",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373937_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Gift Cards",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/TopDeals_Services-Icon-56408cba-e222-410f-9e7b-7d53dc23ca37.png;maxHeight=140;maxWidth=140",Itemname:"Support & Services",},


]



sliderData.map(function(element){
    var box2 = document.createElement("div");

    var Itemimg = document.createElement("img");
    Itemimg.src = element.imageItem;

    var Item = document.createElement("p");
    Item.innerText = element.Itemname;

    box2.append(Itemimg,Item);
   var deals =  document.querySelector("#slider-topdeals")
   deals.append(box2);

   
})




var sliderData2 = [
    {images:"https://m.bobbibrowncosmetics.com/media/export/cms/products/415x415/bb_prod_EA6C_415x415_0.jpg;maxHeight=272;maxWidth=400",names:"SKIN FOUNDATION STICK Multitasking, on-the-go stick",},
    {images:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EFX201_1080x1080_0.jpg;maxHeight=272;maxWidth=400",names:"SKIN CLARIFIER NO. 75 Concentrated pore-clarifying treatment",},
    {images:"https://m.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_0.jpg;maxHeight=272;maxWidth=400",names:"HIGHLIGHTING POWDER Pearl-infused illuminator",},
    {images:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_24845_1080x1080_1.jpg;maxHeight=272;maxWidth=400",names:"LONG-WEAR CREAM SHADOW STICK Our ultimate quick eye shadow stick",},
    {images:"https://m.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ENPT01_1080x1080_0.jpg;maxHeight=272;maxWidth=400",names:"SHEER FINISH PRESSED POWDER Oil-absorbing powder",},
    //  {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",}, 
    //  {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},

]

sliderData2.map(function(ele){
    var Sliderimage = document.createElement("img");
    Sliderimage.src=ele.images;
    var SliderName = document.createElement("p");
    SliderName.innerText = ele.names;

    var sliderboxes = document.createElement("div");
    sliderboxes.append(Sliderimage,SliderName);

    document.querySelector("#slider-foryou").append(sliderboxes);
})
