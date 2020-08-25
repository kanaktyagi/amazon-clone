import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <img className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/August/OnePlus8Series/KV1/V236167621_INBAU_OnePlus8seresOnePlus7Tseries_DesktopTallHero_3000x1200._CB407757652_.jpg"
        alt= "amazonproduct" />
        <div className="home__row">
            <Product
            id="123445"
            title="Forest essential luxuray soap sandalwood and honey"
            price={12.34}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BRa0uTQtL._SX522_.jpg"
            />
            <Product
            id="12345"
            title="Cadbury New Silk Oreo a pack of 3 on occation of Rakhi, 60g"
            price={10}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Nyg3PR3fL._SY879_.jpg"
            />
            <Product
            id="1"
            title="Aroma Magic Face Wash 100 ml (Neem) for with neem and tulsi and tea tree oil"
            price={12.34}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/4163KyrdCNL.jpg"
            />
            <Product
            id="2"
            title="LUZWE® Camera Lens Protector Compatible for iPhone X/XS/XS Max to iPhone 11 Pro/11 Pro Max Converter; Back Camera Lens Protective Cover(Silver)"
            price={35}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51mItb0BZSL._SY879_.jpg"
            />
            </div>
            
            <div className="home__row">
            <Product
            id="3"
            title="Teeth Whitening Light by Starlite Smile. 16 LED Teeth Whitener w/ 3 Adapters for iPhone, Android & USB (compatible with 4G and newer). Works w/Teeth Whitening Strips or any Teeth Whitening Gel"
            price={56}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51HwdaUnwzL._SX679_.jpg"
            />
            <Product
            id="4"
            title="Blue Nectar Anti Ageing Day and Night Brightening Face Cream for Wrinkles with Pure Saffron Sandalwood (No Parabens or Mineral Oil) (50GM)"
            price={23}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61tM4OYzUQL._SX679_.jpg"
            />
            <Product
            id="5"
            title="Navnika® Girls Makeup Mirror Kitty for Apple iPhone 6 with Bling Diamond Stone and Slide Makeup Mirror (Multi Colour)"
            price={2}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81QVYNDeVVL._SY879_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="6"
            title="Loxxo Square Liquid Silicone Phone Case for iPhone 11 Pro All Cube Series with Microfiber Lining Compatible Apple iPhone 11 Pro (Matcha Green)"
            price={12.34}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/31fWSKQpVzL.jpg"
            />
            <Product
            id="7"
            title="Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)"
            price={45}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61zct6h2bTL._SX679_.jpg"
            />
            <Product
            id="8"
            title="Lakmé Absolute Shine Line Eye Liner, Sparkling Olive, 4.5 ml"
            price={10}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/518MBAn-OqL._SX679_.jpg"
            />
            
            </div>
            
        </div>
    )
}

export default Home
