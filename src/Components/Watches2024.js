import React from 'react';
import WatchDetail from './WatchDetail';
import RolexSubmarinerDate from '../Images/RolexSubmarinerDate/RolexSubmarinerDate2.jpeg'
import RolexDaytonaCosmograph from '../Images/RolexDaytonaCosmograph/RolexDaytonaCosmograph2.jpeg'

const Watches2024 = () => {
  const watches = [
    {
      name: "Submariner Date",
      imageUrl: RolexSubmarinerDate,
      history: "It was one of our very first Professional watches and has become the archetype of tool watches dedicated to diving. The Oyster Perpetual Submariner was, at its launch in 1953, the first divers’ wristwatch to be waterproof to 100 metres (330 feet). Today, at the forefront of watchmaking technology, the Submariner and the Submariner Date are equipped with features that ensure their reliability and trustworthiness as diving instruments. Much like those who venture boldly into the mysterious ocean depths, many wearers have chosen the Submariner to explore different territories. On their wrists, it has surpassed its original purpose and has become a globally recognized icon.",
      specifications: {
        "Case Material": "Oystersteel",
        "Water Resistance": "300 meters",
        "Movement": "Perpetual, mechanical self-winding",
        "Diameter": "41 mm"
      },
      technicalDetails: [
        {
          title: "Oyster Perpetual Movement",
          description: "A pioneering self-winding mechanism that harnesses the natural motion of the wearer's wrist to wind the mainspring."
        },
        {
          title: "Cerachrom Bezel",
          description: "A highly resistant ceramic material that is virtually scratchproof and maintains its color and appearance over time."
        }
      ]
    },
    {
      name: "Daytona Cosmograph",
      imageUrl: RolexDaytonaCosmograph,
      history: "The Cosmograph Daytona, a legendary chronograph designed for professional race car drivers, combines precision timing with iconic style.",
      specifications: {
        "Case Material": "18k Gold and Oystersteel",
        "Water Resistance": "100 meters",
        "Movement": "Perpetual chronograph",
        "Diameter": "40 mm"
      },
      technicalDetails: [
        {
          title: "Chronograph Mechanism",
          description: "Precision-engineered chronograph with column wheel and vertical clutch for smooth and accurate timing."
        },
        {
          title: "Tachymeter Scale",
          description: "Allows drivers to calculate average speed based on travel time or distance traveled."
        }
      ]
    }
  ];

  return (
    <div className="space-y-20">
      {watches.map((watch, index) => (
        <WatchDetail
          key={index}
          {...watch}
        />
      ))}
    </div>
  );
};

export default Watches2024;