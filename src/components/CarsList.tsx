import { Grid, Row } from 'vcc-ui';
import { Car } from '../../interfaces/cars';
import { CarItem } from './CarItem/CarItem';

type CarsListProps = {
    cars: Car[];
};

export const CarsList = ({ cars }: CarsListProps) => {
    return (
        <Grid>
            <Row>
                <ul>
                    {cars.map((car: Car) => (
                        <li key={car.id}>
                            <CarItem car={car} />
                        </li>
                    ))}
                </ul>
            </Row>
        </Grid>
    );
};
