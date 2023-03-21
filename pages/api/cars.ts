import { NextApiResponse, NextApiRequest } from 'next';
import { Car } from '../../src/interfaces/cars';
import cars from '../../public/api/cars.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse<Car[]>) {
    return res.status(200).json(cars);
}
