import React, { useEffect, useState } from 'react';


const Countdown = ({ targetDate, eventDescription }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     

      setTimeLeft({ days });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className='Countdown__container'>
      <p> Quedan {timeLeft.days} días para {eventDescription}
      
      </p>
    </div>
  );
};

export default Countdown;
