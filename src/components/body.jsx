import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slidersimg from '../sliderimg';

import { Carousel } from 'react-responsive-carousel'
import Cards from './cards';

function Body() {
    return (
        <div className='cont bg-[#e3e6e6]'>
            <div className="slider">
                <Carousel autoPlay infiniteLoop interval={3500}>
                    {
                        Slidersimg.map((ele, index) => {
                            return <div key={index}>
                                <img src={ele} alt="" />
                                <div className=' absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-[#e3e6e6]' />
                            </div>
                        })
                    }
                </Carousel>
            </div>
            <Cards/>
        </div>
    )
}

export default Body