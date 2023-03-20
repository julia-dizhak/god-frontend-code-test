import React from "react";
import { Block, Button } from 'vcc-ui';
import useSWR from "swr";
import { Car } from "./api/cars";
import { Spinner } from "vcc-ui";
import CarsList from "../components/CarsList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR<Car[]>("/api/cars", fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="spinner-wrapper"><Spinner size={24} /></div>;
  if (!data) return null;

  return (
    <React.StrictMode>
      <CarsList cars={data} />
    </React.StrictMode>
  );
}
