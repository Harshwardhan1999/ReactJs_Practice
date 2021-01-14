import React from 'react';
import CardItem from  './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Places to visit</h1>
            <div className='cards_container'>
                <div className='card_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/img1.jpg'
                        text='Mahabodhi Temple, Gaya'
                        label='Place'
                        path='/Bus'/>

                        <CardItem 
                        src='images/rajgir.jpg'
                        text='RajGir Temple'
                        label='Place'
                        path='/Bus'/>
                    </ul>

                    <ul className='cards_items'>
                        <CardItem 
                        src='images/Baidyanath.jpg'
                        text='Baidyanath Temple, Deoghar'
                        label='Place'
                        path='/Bus'/>

                        <CardItem 
                        src='images/Jalamandir.jpg'
                        text='Jalmandir, Pawapuri'
                        label='Place'
                        path='/Bus'/>

                        <CardItem 
                        src='images/patna.jpg'
                        text='Patna Sahib, Patna'
                        label='Place'
                        path='/Bus'/>
                    </ul>
                </div>
            </div>

            <h1>Delicious fOOD</h1>
            <div className='cards_container'>
                <div className='card_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/Litti.jpg'
                        text='Litti Chhokha'
                        label='food'
                        path='/Bus'/>
                    </ul>

                    <ul className='cards_items'>
                        <CardItem 
                        src='images/nasta.jpg'
                        text='Nasta'
                        label='food'
                        path='/Bus'/>

                        <CardItem 
                        src='images/Meet.jpg'
                        text='Mutton'
                        label='food'
                        path='/Bus'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
