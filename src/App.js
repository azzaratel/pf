
import { useState } from 'react';
import './App.css';
import Carousell from './components/Carousell';
import Navvbar from './components/Navvbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategList from './components/CategList';
import Contactus from './components/Contactus';

function App() {
  const [prod, setprod] = useState([
    {
      name_product:"parfum zara",
  image_product:"https://finesse.ra.tn/wp-content/uploads/2021/06/Zara-Oriental-EDT-100ml.png",
descrition:"Eau de toilette musquée; Sa pyramide olfactive contient des notes de poire, de graines d’ambrette et d’iris",
   prix:"39.000dt",
   categorie:"pc",
},
{
      name_product:"Victoria Secret Body Mist Pure Seduction 250ML",
  image_product:"https://bkparfum.com/cdn/shop/files/vb_1500x.jpg?v=1664458281",
descrition:"Acheter votre Victoria Secret Body Mist Pure Seduction 250ML de la marque Victoria's Secret au meilleur prix en Tunisie sur RebelsStore.tn",
   prix:"30.000dt",
   categorie:"pc",
},
{
      name_product:"Machine à cafe nespresso rouge",
  image_product:"https://www.agrafe.tn/2764-large_default/machine-a-cafe-nespresso-krups-inissia-rouge.jpg",
descrition:"Machine à café Nespresso - Puissance 1260W - Capacité 0.7L - Pression 19 bar - Réservoir d'eau amovible - Arrêt automatique - Système de chauffe",
   prix:"475.000dt",
   categorie:"pe",
},
{
      name_product:"Chocolat Milka",
  image_product:"https://i.imgur.com/JBd23qJ.jpeg",
descrition:"Le chocolat au lait est un chocolat contenant usuellement entre 25 % et 40 % de cacao et de beurre de cacao, du lait généralement sous forme de lait en poudre, ainsi que du sucre. ",
   prix:"7.000dt",
   categorie:"pa",
},
{
  name_product:"Pack Ecran solaire blur spf50+ & brume uriage spf50+ & huile sèche spf50 & Gelée moussante Physiopure 55ml Gratuit - SVR",
image_product:"https://newzone-1e801.kxcdn.com/16967-large_default/pack-ecran-solaire-blur-spf50-brume-uriage-spf50-huile-seche-spf50-gelee-moussante-physiopure-55ml-gratuit-svr.jpg",
descrition:"L'écran SVR SUN SECURE Blur est l’association parfaite d’une haute protection solaire SPF50 et d’une crème mousse, qui unifie le teint, floute les imperfections, et donne à la peaux un aspect veloutée.",
prix:"157,950 ",
categorie:"pc",
},
{
  name_product:"Pack aloha summer bag - inoderma",
image_product:"https://zone2-1e801.kxcdn.com/16978-large_default/pack-aloha-summer-bag-inoderma.jpg",
descrition:"ALOHA BY INODERMA Huile au Monoï de Tahiti Pailletée PINK 100ML : Aloha est une huile au Monoï de Tahiti d’origine Polynésienne, obtenue grâce à la macération de fleurs de Tiaré dans l’huile de noix de coco. Dotée d’un parfum doux et envoûtant, Aloha est appréciée pour ses vertus hydratantes, adoucissantes et assouplissantes.",
prix:" 69,500",
categorie:"pc",
},
{
  name_product:"Coffret ecran solaire teinté beige eclat spf50 + phytovera gel apaisant gratuit -phyteal",
image_product:"https://newzone-1e801.kxcdn.com/10861-large_default/coffret-ecran-solaire-teinte-beige-eclat-spf-50-uva-phytovera-gel-apaisant-gratuit-phyteal-.jpg",
descrition:"PHYTEAL ECRAN TEINTE BEIGE ECLAT SPF 50, 50 ML Tube de 50 ml.Protection solaire,  fond de teint à fort pouvoir couvrant et  soin hydratant.",
prix:"45.000dt",
categorie:"pc",
},
{
  name_product:"HACHOIR PREMIUM EDITION SWISSCOOK BL-2096 150W - ROUGE",
image_product:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/h/k/hk12-frozen_176_1.jpg",
descrition:"Mini Hachoir Premium Edition SWISSCOOK - Puissance: 150 Watts - Capacité du bol: 375 ml - Voltage: 230 - 2 lames en acier inoxydable - Matériau du revêtement: Plastic - Démontage facile - Réglages - Fermeture avec système de sécurité - Couvercle avec ouverture de remplissage - Couleur: Rouge - Garantie: 1 an",
prix:"300.000",
categorie:"pe",
},
{
  name_product:"Florence Machine café à capsule Nespresso -1400 W 800 ml -Rouge",
image_product:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/1937/1.jpg?2710",
descrition:"un café sensationnel à chaque tasse avec la machine Florence capsules Nespresso  Qualité professionnelle à la maison : La machine florence CN-1400GO Coffee est la machine idéale pour les amateurs de café",
prix:"310.000",
categorie:"pe",
},
{
  name_product:"Depilatory Heater Apareille Cire - Cartouche",
image_product:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/1554/1.jpg?2547",
descrition:"Appareile cire cartouches Depilatory  permet de faire fondre la cire tiède liposoluble contenue dans les cartouches. Il facilite l'application de la cire et permet une épilation nette",
prix:"25.000",
categorie:"pe",
},
{
  name_product:"Nutella Pâte à tartiner - Noisette - 750 Gr",
image_product:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/8552/1.jpg?7950",
descrition:"Pour obtenir cette excellence gustative et cette onctuosité incomparable, la marque a toujours eu à cœur de préserver son processus de fabrication et de sélectionner rigoureusement les ingrédients qui font sa spécificité : des noisettes de grande qualité, sélectionnées pour leur gros calibre et leur saveur fruitée exceptionnelle, des fèves de cacao originaires d'Afrique de l'Ouest et torréfiées au sein de Ferrero, du lait écrémé provenant d'Europe, et notamment de Normandie .  ",
prix:"35.000",
categorie:"pa",
},
{
  name_product:"Ferrero Rocher Fines gaufrettes chocolat lait et noisettes -30 pièces",
image_product:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/8296/1.jpg?5428",
descrition:". Ferrero Rocher sublime vos fêtes, et vos moments de partages privilégiés en y apportant une touche magique, raffinée et gourmande. FERRERO ROCHER : Fines gaufrettes enrobées de chocolat au lait et noisettes broyées et fourrées noisette",
prix:"49.000",
categorie:"pa",
},
{
  name_product:"Chupa Chups Sachet Milky P10",
image_product:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/2465/1.jpg?7198",
descrition:"",
prix:"7.500",
categorie:"pa",
},


  ])
  return (
    <div className="App">
      <Navvbar/>
      <Carousell/>
      <CategList prod={prod}/>
      <Contactus/>
    </div>
  );
}

export default App;
