import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const handleDayClick = (day: string) => {
    navigate(`/day/${day}`);
  };

  return (
    <div className="calendar">
      {days.map((day, index) => (
        <div className="day" key={index} onClick={() => handleDayClick(day)}>
          {day}
        </div>
      ))}
    </div>
  );
}

export default Home;
