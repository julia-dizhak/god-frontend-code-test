import React, { PropsWithChildren, useState } from 'react';

type CarModelsFilterContextType = {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const CarModelsFilterContext = React.createContext<CarModelsFilterContextType>({
    filter: '',
    setFilter: () => {},
});

export const CarModelsFilterProvider = ({ children }: PropsWithChildren) => {
    const [filter, setFilter] = useState<string>('');

    return <CarModelsFilterContext.Provider value={{ filter, setFilter }}>{children}</CarModelsFilterContext.Provider>;
};
