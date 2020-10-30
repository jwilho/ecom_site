import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="header__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home__row">
             <Product 
                id= "1233234342342"
                title= "the lean startup"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />
            <Product 
                id= "121231332342"
                title= "the lean startup"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />

        </div>

        <div className="home__row">
             
            <Product 
                id= "12345635432342"
                title= "the lean startup"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />

        </div>

        <div className="home__row">
             <Product 
                id= "1236456532342"
                title= "the lean startup"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />
            <Product 
                id= "1234645632342"
                title= "the lean startup"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />
            <Product 
                id= "1233465462342"
                title= "the lean startup"
                price={11.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
            />

        </div>
            
       
        </div>
    )
}

export default Home
