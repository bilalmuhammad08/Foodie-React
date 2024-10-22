import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';


const Work = () => {
    const WorkInfoData = [
        {
            Image: PickMeals,
            title: "Pick Meals",
            text: "Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food."
        },
        {
            Image: ChooseMeals,
            title: "Choose How Often",
            text: "Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food."
        },
        {
            Image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food.Indulge in life's greatest pleasure: food."
        }
    ]

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it Works</h1>
                <p className="primary-text">Savoring every moment (and every flavor)
                    Together is better when food is involved.Savoring every moment (and every flavor)
                    Together is better when food is involved.
                </p>
            </div>
            <div className='work-section-bottom'>
                {
                    WorkInfoData.map((data) =>(
                        <div className='work-section-info'>
                            <div className='info-boxes-img-container'>
                                <img src={data.Image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default Work
