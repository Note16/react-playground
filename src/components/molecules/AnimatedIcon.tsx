import { FC } from 'react';
import './AnimatedIcon.scss'

interface AnimatedIconProps
{
  icon: "bat-idle" 
    | "bat-flying" 
    | "bluebird-fly" 
    | "chicken-idle" 
    | "chicken-run" 
    | "duck-idle" 
    | "fatbird-idle" 
    | "mushroom-idle" 
    | "mushroom-run" 
    | "rino-idle"
    | "rino-run"
    | "pig-walk" 
    | "pig-run"
}

const AnimatedIcon: FC<AnimatedIconProps> = ({ icon }) => {
  return (
    <div className={"image " + icon}></div>
  )
}

export default AnimatedIcon
