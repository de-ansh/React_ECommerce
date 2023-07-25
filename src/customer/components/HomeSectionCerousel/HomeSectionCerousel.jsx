import React from "react";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const HomeSectionCerousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (
    <div className="border border-black">

        <div className="relative p-5 border ">
            <AliceCarousel
                items={items}
                disableButtonsControls
                disableDotsControls
        
                infinite
                responsive={responsive}
            />
            <Button variant="contained" className="z-50  bg-white" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translatex(50%) rotate(90deg)", bgcolor:"white" }} aria-label="next">
                < KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>
            </Button>
            <Button variant="contained" className="z-50  bg-white" sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translatex(50%) rotate(-90deg)", bgcolor:"white" }} aria-label="next">
                < KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>
            </Button>
        </div>
    </div>


    )
}

export default HomeSectionCerousel