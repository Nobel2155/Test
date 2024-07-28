import Paragraph from "./Paragraph";
import Title from "./Title";

const PassengerInfo = () => {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <Title title="Passenger Information" />
      <Paragraph>
        Enter the required information for each traveler and be sure that it
        exactly matches the government-issued ID presented at the airport.
      </Paragraph>
    </div>
  );
}

export default PassengerInfo;
