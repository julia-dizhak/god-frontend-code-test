import React from "react"
import Link from "next/link"
import {Row, Col, Text} from "vcc-ui"
import { Car } from "../pages/api/cars";


type CarProps = {
  car: Car;
}
export const CarItem = ({ car }: CarProps) => {
	return (
		<Col>
			<Row>
				<Text
					subStyle='emphasis'>
					{car.bodyType}
				</Text>
			</Row>
		</Col>
	)
}