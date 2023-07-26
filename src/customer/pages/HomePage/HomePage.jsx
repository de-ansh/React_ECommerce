import React from 'react'
import MainCarousel from '../../components/HomeCerousel/MainCerousel'
import HomeSectionCerousel from '../../components/HomeSectionCerousel/HomeSectionCerousel'
import { mens_kurta } from "../../../Data/men_kurta";
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
             <MainCarousel/>
            <div className=' space-y-10 py-20 flex-col justify-center px-5 lg:px-10 '>
                <HomeSectionCerousel data= {mens_kurta} SectionName={"Men's Kurta"} />
                <HomeSectionCerousel data= {mens_kurta} SectionName={"Men's Shoes"} />
                <HomeSectionCerousel data= {mens_kurta} SectionName={"Men's shirts"} />
                <HomeSectionCerousel data= {mens_kurta} SectionName={"Women's Saree"} />
                <HomeSectionCerousel data= {mens_kurta}  SectionName={"Women's Shoes"}/>
                <HomeSectionCerousel data= {mens_kurta} SectionName={"Women's  Tops"} />
             </div>
            <Footer/>
        </div>
    )
}

export default HomePage