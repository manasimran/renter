import Image from "next/image";
import Link from "next/link";

type CardProps = {
  name: string;
  brand: string;
  year: number;
  perhourrate: number;
  milage: number;
  seats: number;
  image: string[];
  description: string;
  availability: boolean;
  overtimerate: number;
  color: string;
  fueltype: string;
  transmissiontype: string;
  plateno: string;
};

const Card = ({ car }: any) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md shadow-md">
      <div className="flex gap-4 items-center">
        {/* <Image src={car.image[0]} alt={car.name} width={150} height={100} /> */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-gray-900">{car.name}</h2>
          <p className="text-sm text-gray-600">{car.brand} - {car.year}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-sm text-gray-600">Per Hour Rate: {car.perhourrate}</p>
        <p className="text-sm text-gray-600">Milage: {car.milage} km</p>
        <p className="text-sm text-gray-600">Seats: {car.seats}</p>
        <p className="text-sm text-gray-600">Over Time Rate: {car.overtimerate}</p>
        <p className="text-sm text-gray-600">color:</p>
        <div
          className="w-4 h-4 rounded-full border-2 border-black"
          style={{ backgroundColor: car.color }}
        ></div>
        <p className="text-sm text-gray-600">Fuel Type: {car.fueltype}</p>
        <p className="text-sm text-gray-600">Transmission Type: {car.transmissiontype}</p>
        <p className="text-sm text-gray-600">Plate Number: {car.plateno}</p>
      </div>
      <p className="text-sm text-gray-600 mt-4">{car.description}</p>
      {car.availability ? (
        <Link href={`/cars/${car.name}`}>
          <p className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Rent Now
          </p>
        </Link>
      ) : (
        <p className="mt-4 text-sm text-gray-600 italic">Car is not available for rent</p>
      )}
    </div>
  );
};

export default Card;

