import { useState, useEffect } from "react";
import { Text } from "react-native";
import { formatDate, pluralize } from "../utilities";

const Countdown = ({ date, time }) => {
    const [countdownTime, setCountdownTime] = useState({ days: 0, hours: 0, minutes: 0 });
    const eventDateTime = formatDate(date, time);
    
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = eventDateTime - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

          setCountdownTime({days, hours, minutes});

        }, 1000);

      return () => clearInterval(interval);
    }, []);

    
    return (
      <Text>
          Début dans : 
          {countdownTime.days > 0 ? ` ${pluralize(countdownTime.days, 'jour')} et` : ""}
          {countdownTime.hours > 0 && countdownTime.days === 0 ? ` ${pluralize(countdownTime.hours, 'heure')} et` : ""}
          {countdownTime.minutes > 0 ? ` ${pluralize(countdownTime.minutes, 'minute')}` : ""}
      </Text>
    );
    
};

export default Countdown;
