import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { CITIESDATA, type CitiesDataType } from '@/constants/CitiesData';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/lib/css';

export const App: FC = () => {
  const [citiesData, setCitiesData] = useState<CitiesDataType>(CITIESDATA);

  const [activeCity, setActiveCity] = useState<1 | 2 | 3>(1);

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
      if (storedData) {
        const parsedData: CitiesDataType = JSON.parse(storedData);
        setCitiesData(parsedData);
      }
    } catch (error) {
      console.error('Failed to parse citiesData from localStorage', error);
    }
  }, []);

  return (
    <div className='flex w-full min-h-screen'>
      <Container className='flex  flex-col flex-1 gap-10'>
        <main className='flex flex-col py-10 flex-1 gap-3'>
          <section className='flex justify-between'>
            <div className='flex gap-4'>
              {([1, 2, 3] as const).map((cityNumber) => (
                <Button
                  key={cityNumber}
                  variant='outline'
                  className='w-fit px-4'
                  onClick={() => setActiveCity(cityNumber)}
                >
                  Город {cityNumber}
                </Button>
              ))}
            </div>

            <Button
              variant='outline'
              onClick={() => setResetCity(activeCity)}
              className='w-fit px-4'
            >
              Сбросить город
            </Button>
          </section>

          <section className='flex flex-col border border-gray-400/50'>
            {citiesData[activeCity].map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-table border-b border-gray-400/50'
              >
                <div className='flex items-center justify-center'>
                  {index + 1}
                </div>
                <div
                  className={cn('flex items-center', {
                    'opacity-50': item.completed,
                  })}
                >
                  {item.title}
                </div>
                <div>
                  <Button
                    variant='transparent'
                    className={cn('w-10 h-10', {
                      'text-green-500': item.completed,
                    })}
                    onClick={() => toggleCompeted(item.title)}
                  >
                    <CheckIcon />
                  </Button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </Container>
    </div>
  );
};
