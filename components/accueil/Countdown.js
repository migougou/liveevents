import { useState, useEffect } from "react";
import { Text } from "react-native";
import { formatDate, pluralize } from "../utilities";

const Countdown = ({ date, start, end }) => {
  const [countdownTime, setCountdownTime] = useState({ days: 0, hours: 0, minutes: 0 });
  const [now, setNow] = useState(new Date().getTime());
  const startDateTime = formatDate(date, start);
  const endDateTime = formatDate(date, end);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date().getTime();
      setNow(current);

      let distance;

      if (current < startDateTime) {
        distance = startDateTime - current;
      } else if (current <= endDateTime) {
        distance = endDateTime - current;
      } else {
        distance = -1;
      }

      if (distance < 0) {
        setCountdownTime({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setCountdownTime({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayText = () => {
    let result = "";

    if (now > endDateTime) {
      result = "Terminé";
    } else if (now < startDateTime) {
      result = "Début dans : ";
    } else {
      result = "Fin dans : ";
    }

    if (countdownTime.days > 0) {
      result += `${pluralize(countdownTime.days, "jour")}, `;
    }
    if (countdownTime.hours > 0) {
      result += `${pluralize(countdownTime.hours, "heure")}, `;
    }
    if (countdownTime.minutes > 0) {
      result += `${pluralize(countdownTime.minutes, "minute")}`;
    }

    return result;
  };

  return <Text>{getDisplayText()}</Text>;
};

export default Countdown;
