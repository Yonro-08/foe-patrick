import type { FC } from 'react';

import type { ActiveCityType } from '@/app/app';
import { Button } from './button';

interface Props {
  activeCity: ActiveCityType;
  changeCity: (value: ActiveCityType) => void;
  setResetCity: (active: 1 | 2 | 3) => void;
}

export const HeaderSection: FC<Props> = ({
  activeCity,
  changeCity,
  setResetCity,
}) => {
  return (
    <section className='overflow-auto'>
      <div className='flex justify-between gap-20'>
        <div className='flex gap-5'>
          <div className='flex gap-4'>
            {([1, 2, 3] as const).map((cityNumber) => (
              <Button
                key={cityNumber}
                variant={cityNumber === activeCity ? 'accent' : 'outline'}
                className='w-fit px-4 whitespace-nowrap'
                onClick={() => changeCity(cityNumber)}
              >
                Город {cityNumber}
              </Button>
            ))}
          </div>

          <Button
            variant='outline'
            onClick={() => setResetCity(activeCity)}
            className='w-fit px-4 whitespace-nowrap'
          >
            Сбросить город
          </Button>
        </div>

        <Button
          variant='outline'
          onClick={() => {
            window.localStorage.removeItem('citiesData');
          }}
          className='w-fit px-4 whitespace-nowrap'
        >
          Сбросить данные хранения
        </Button>
      </div>
    </section>
  );
};
