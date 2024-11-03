import React, { useEffect, useState } from 'react';
import CenteredBox from '../components/CenteredBox';
import Navbar from '../components/navbar';
import Bluebar from '../components/Bluebar';
import Countdown from '../components/Countdown';

const Curso = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    const date = localStorage.getItem('selectedDate');
    const description = localStorage.getItem('eventDescription');

    if (date) {
      setSelectedDate(date);
    }

    if (description) {
      setEventDescription(description);
    }
  }, []);

  const handleRemoveCountdown = () => {
    setSelectedDate(null);
    setEventDescription('');
    localStorage.removeItem('selectedDate'); 
    localStorage.removeItem('eventDescription'); 
  };

  return (
    <div>
      <Bluebar />
      <h1 className='Curso__title'>(202402)(MAT024) MATEMATICAS IV | Paralelos: 200/201/202/203/204/205/206</h1>
      <CenteredBox>
        <Navbar />
        {/* {selectedDate && (
          <>
            <Countdown targetDate={selectedDate} eventDescription={eventDescription} />
            <button onClick={handleRemoveCountdown} className="remove-button">
              Eliminar Cuenta Regresiva
            </button>
          </>
        )} */}
      </CenteredBox>
    </div>
  );
};

export default Curso;
