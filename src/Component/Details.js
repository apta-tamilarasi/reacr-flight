import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './details.css'

const Details = () => {
    let state = useSelector((e) => e)
    let [param] = useSearchParams()
    const settings = {
        dots: true,
        infinite:true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return <section className="detail-section">
        <div className="detail-container">
        {
            state.obj.arr.map((e) => {
                return e.flight_number === Number(param.get('id')) ? <div className="cardcol">
                    <Slider {...settings}>
                        <div className="image">
                            <img src={e.links.flickr_images[0] || "https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.webp?b=1&s=170667a&w=0&k=20&c=sO3ciFoIvIU6cypE9wTEycVACBHgKjeiWtNf5JBTDko="} alt=""/>
                        </div>
                        <div className="image">
                            <img src={e.links.mission_patch} alt=""/>
                        </div>
                    </Slider>
                    <div className="name">
                        {e.mission_name}
                    </div>
                    <div>
                        <p>{e.details}</p>
                    </div>
                </div> : ''
            })
        }
        </div>

    </section>
}
export default Details