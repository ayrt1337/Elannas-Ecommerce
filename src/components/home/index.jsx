import React from "react";
import Logo from '../../assets/elannas-logo.png'
import LacoHero1 from '../../assets/laco-1.png'
import LacoHero2 from '../../assets/laco-2.png'

const Home = () => {
    return(
        <>
            <header className="bg-[#E1B3E1] flex flex-col sm:items-center p-8 gap-5">
                <img className="h-19" src={Logo}></img>

                <div className="flex sm:justify-between gap-8">  
                    <a className="font-display leading-tight" href="#">
                        <span className="link link-underline link-underline-black cursor-pointer text-white text-xl">Sobre</span>
                    </a>

                    <a className="font-display leading-tight" href="#">
                        <span className="link link-underline link-underline-black cursor-pointer text-white text-xl">Produtos</span>
                    </a>

                    <a className="font-display leading-tight" href="#">
                        <span className="link link-underline link-underline-black cursor-pointer text-white text-xl">Contato</span>
                    </a>
                </div>
            </header>

            <main>
                <section>
                    <div className="grid grid-cols-2 relative">
                        <div className="gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center text-center">
                            <p className="text-white text-5xl">Feitos com amor</p>
                            <p className="text-white text-xl border-2 border-solid border-white px-2 py-2 w-40 cursor-pointer rounded-sm">Ver modelos</p>
                        </div>

                       <img className="h-180 w-full" src={LacoHero1}></img>
                       <img className="h-180 w-full" src={LacoHero2}></img> 
                    </div>
                </section>

                <section className="bg-[#F9F4B4] flex flex-col items-center">
                    <div className="flex flex-col items-center text-center">
                        <p>Quem sou eu?</p>
                        <p>Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It </p>
                    </div>

                    <div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home