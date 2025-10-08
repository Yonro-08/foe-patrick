import { useEffect, useState, type FC } from 'react';
import { Container } from '@/components/container';
import { HeaderSection } from '@/components/headerSection';
import { TableSection } from '@/components/tableSection';
import { CITIESDATA, type CitiesDataType } from '@/constants/CitiesData';

export type ActiveCityType = 1 | 2 | 3;

export const App: FC = () => {
  const [citiesData, setCitiesData] = useState<CitiesDataType>(CITIESDATA);

  const [activeCity, setActiveCity] = useState<ActiveCityType>(1);

  const changeCity = (value: ActiveCityType) => {
    setActiveCity(value);

    localStorage.setItem('activeCity', JSON.stringify(value));
  };

  const toggleCompeted = (title: string) => {
    setCitiesData((prev) => {
      const updated = {
        ...prev,
        [activeCity]: prev[activeCity].map((item) =>
          item.title === title ? { ...item, completed: !item.completed } : item,
        ),
      };

      localStorage.setItem('citiesData', JSON.stringify(updated));
      return updated;
    });
  };

  const setResetCity = (active: 1 | 2 | 3) => {
    setCitiesData((prev) => {
      const updated = {
        ...prev,
        [active]: prev[active].map((item) => ({
          ...item,
          completed: false,
        })),
      };

      localStorage.setItem('citiesData', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    try {
      const storedData = window.localStorage.getItem('citiesData');
      const activeCityData = window.localStorage.getItem('activeCity');

      if (storedData) {
        const parsedData: CitiesDataType = JSON.parse(storedData);
        setCitiesData(parsedData);
      }
      if (activeCityData) {
        const parsedData: ActiveCityType = JSON.parse(activeCityData);
        setActiveCity(parsedData);
      }
    } catch (error) {
      console.error('Failed to parse citiesData from localStorage', error);
    }
  }, []);

  return (
    <div className='flex w-full min-h-screen'>
      <Container className='flex  flex-col flex-1 gap-10'>
        <main className='flex flex-col py-10 flex-1 gap-3'>
          <HeaderSection
            activeCity={activeCity}
            setResetCity={setResetCity}
            changeCity={changeCity}
          />

          <TableSection
            citiesData={citiesData}
            activeCity={activeCity}
            toggleCompeted={toggleCompeted}
          />
        </main>
      </Container>
    </div>
  );
};
