import React, { useState, useEffect } from 'react';

type Time = number | string

const Time: React.FC = () => {
  let [min, setMin] = useState<Time>(0);
  let [hour, setHour] = useState<Time>(0);
  const plusMin = (num : any):void => {
    if(min < 60){
        setMin(num + 1)
    } 
    else{
        setMin(0)
    }
}
  const plusHour = (num : any):void => {
    if(hour < 24){
        setHour(num + 1)
    } 
    else{
        setHour(0)
    }
}
  const minusMin = (num : any):void => {
    if(min > 0){
        setMin(num - 1)
    } 
    else{
        setMin(59)
    }
}
  const minusHour = (num : any):void => {
    if(hour > 0){
        setHour(num - 1)
    } 
    else{
        setHour(24)
    }
}
  return (
    <>
      <div className="block">
        <div className="hour">
          <div className="triangle triangle_up" onClick={() => plusHour(hour)}></div>
          {hour < 10 ?<h1>0{hour}</h1> : <h1>{hour}</h1> }
          <div className="triangle triangle_down" onClick={() => minusHour(hour)}></div>
        </div>
        <span>
          <h1>:</h1>
        </span>
        <div className="min">
          <div className="triangle triangle_up" onClick={() => plusMin(min)}></div>
          {min < 10 ?<h1>0{min}</h1> : <h1>{min}</h1> }
          <div className="triangle triangle_down" onClick={() => minusMin(min)}></div>
        </div>
      </div>
    </>
  );
};
export default Time;
