import React from 'react'
import MainCarousel from '../../components/HomeCerousel/MainCerousel'
import HomeSectionCerousel from '../../components/HomeSectionCerousel/HomeSectionCerousel'

const HomePage = () => {
    return (
        <div>
             <MainCarousel/>
            <div className=' space-y-10 py-20 flex-col justify-center '>
                <HomeSectionCerousel/>
                <HomeSectionCerousel/>
                <HomeSectionCerousel/>
                <HomeSectionCerousel/>
                <HomeSectionCerousel/>
                <HomeSectionCerousel/>
             </div>

        </div>
    )
}

export default HomePage