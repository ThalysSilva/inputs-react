import { Text } from '@chakra-ui/react';
import React from 'react';
import { useFileInput } from './hooks/useInputFile';

type Props = {
  id?: string;
  onSetFile?: () => void;
};

export function InputFile({ id, onSetFile }: Props) {
  const { ref, onClick, file } = useFileInput({ onSetFile });
  return (
    <div className={'flex gap-4 w-full items-center bg-backgroundCart-primary p-4 rounded-lg'}>
      <input id={id} ref={ref} type={'file'} className={'hidden'} />
      <button
        type={'button'}
        className={'border border-brand-primary rounded-xl w-fit h-fit py-2 px-4'}
        onClick={onClick}
      >
        Choose file
      </button>
      <div className="flex flex-1 items-center">
        <Text lineHeight={5}>{file?.name}</Text>
      </div>
    </div>
  );
}
