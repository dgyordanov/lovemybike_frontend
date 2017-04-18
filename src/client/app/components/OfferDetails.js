import React from 'react'
import { Carousel } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import moment from 'moment/moment.js';


const OfferDetails = ({offer}) => {
    var offerImages = [offer.image0_m, offer.image1_m, offer.image2_m, offer.image3_m, offer.image4_m, offer.image5_m]
    var carouselItems = offerImages.filter(image => image ? true : false
    ).map((image, index) =>
        <Carousel.Item key={index}>
            <img alt="" src={image}/>
        </Carousel.Item>
    )

    return (
        <div>
            <div className="row">
                <h1 className="text-center">{offer.title} <small>{offer.price} &euro;</small></h1>
            </div>
            <div className="row">
                <Carousel className="col-md-4 col-md-offset-2">
                    {carouselItems}
                </Carousel>

                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Owner`s information</h3>
                         </div>
                        <div className="panel-body">
                            <div>
                                <strong>{offer.ownerName}</strong>
                            </div>
                            <div>
                                {offer.street} {offer.number}
                            </div>
                            <div>
                                {offer.postcode}, {offer.city}
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Description</h3>
                        </div>
                        <div className="panel-body">
                            {offer.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row margin-top-15">
                <div className="col-md-8 col-md-offset-2">
                    <h2>Book now</h2>
                    <div>
                        <DateRange
                            onInit={(date) => console.log(date)}
                            onChange={(date) => console.log(date)}
                            calendars={1}
                            specialDays={[{date: moment().endOf('week')},]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferDetails