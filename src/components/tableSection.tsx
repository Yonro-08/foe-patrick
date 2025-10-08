import type { FC } from 'react';
import type { CitiesDataType } from '@/constants/CitiesData';
import { CheckIcon } from 'lucide-react';

import type { ActiveCityType } from '@/app/app';
import { cn } from '@/shared/lib/css';
import { Button } from './button';

interface Props {
  citiesData: CitiesDataType;
  activeCity: ActiveCityType;
  toggleCompeted: (title: string) => void;
}

export const TableSection: FC<Props> = ({
  activeCity,
  citiesData,
  toggleCompeted,
}) => {
  return (
    <section className='flex flex-col border border-gray-400/50'>
      <div className='grid grid-cols-table border-b border-gray-400/50'>
        <div>№</div>
        <div>Строит</div>
        <div>Задача</div>
        <div className='w-full h-full' />
      </div>
      {citiesData[activeCity].map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-table border-b border-gray-400/50'
        >
          <div className='flex items-center justify-center'>{index + 1}</div>
          <div
            className={cn('flex items-center', {
              'opacity-50': item.completed,
            })}
          >
            {item.title}
          </div>
          <div></div>
          <div className='flex items-center justify-center'>
            <Button
              variant='transparent'
              className={cn('w-10 h-10', {
                'text-accent': item.completed,
              })}
              onClick={() => toggleCompeted(item.title)}
            >
              <CheckIcon />
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
