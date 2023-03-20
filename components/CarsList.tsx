import Link from 'next/link'
import {Grid, Row} from "vcc-ui"
import { Car } from '../pages/api/cars'
import { CarItem } from './CarItem';

type CarsListProps = {
  cars: Car[];
}

export default function CarsList({ cars }: CarsListProps) {
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
  )
}