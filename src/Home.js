import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt="home_img"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Sony SA-RS5 - Enceintes arrière Satellites sans Fil avec Batterie intégrée Noir SARS5.CEL"
            price={499.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/817fiKo5a8L._AC_SX355_.jpg"
          />
          <Product
            id="49538094"
            title='Trust Gaming GXT 707 Resto Chaise Gaming, Fauteuil Bureau, Fauteuil, Pivotement Total sur 360°, Chaise avec Coussins Amovibles, Châssis Construit en Métal Robuste – Noir'
            price={249.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51qKGtRoGSL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title='MSI Raider GE66 12UE-657FR : Intel Core I9-12900H - 32GB DDR5 - SSD 1TB NvMe - Nvidia RTX3060 6GB - 15,6" Full HD 360Hz - Windows 11 Famille - Clavier Azerty ( Français) Noir'
            price={1995.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/8186yDiRc4L.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
          <Product
            id="23445930"
            title='Dell G15 5511 Intel Core i5-11400H Portable Gaming 15.6" Full HD Black 8Go de RAM SSD de 512Go NVIDIA GeForce RTX 3050 Ti Windows 11H Home Clavier AZERTY Français'
            price={929.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71EL5sN5o-L._AC_SY355_.jpg"
          />
          <Product
            id="3254354345"
            title="Corsair K95 RGB Platinum Clavier Mécanique Gaming (Cherry MX Speed, Rétro-Éclairage RGB Multicolore, AZERTY) Noir"
            price={204.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71318cey9AL._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title='LG UltraWide 29WP60G-B Moniteur 29", format 21:9 ultra-large, dalle IPS résolution UWFHD (2560x1080), 5ms GtG 75Hz, HDR 10, sRGB 99%, AMD FreeSync, inclinable, USB-C'
            price={299.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UKly774nL.__AC_SY300_SX300_QL70_ML2_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
