import React from 'react';

const Card = ({taskObj,index}) => {
    return (
        <div className=' card-wrapper mr-5'>
            <div className='card-top' style={{"background-color" : "chartreuse"}}></div>
            <div className='task-holder'>
                <span className='card-header' style={{"background-color" :"#F2FAF1", "border-radius" :"10px"}}>{taskObj.Name}</span>
                <p>{taskObj.Description}</p> 

                <div style={{"position":"absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className='far fa-edit mr-3' style={{"color" : "#5DC250"}}></i>
                    <i className='fas fa-trash-alt ' style={{"color" : "#5DC250"}}></i> 
                </div>
                
            </div>

        </div>
    );
};

export default Card;