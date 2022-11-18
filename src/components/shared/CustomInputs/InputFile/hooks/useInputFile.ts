import { useEffect, useRef, useState } from 'react';
type Props = {
  onSetFile?: (file?: File) => void;
};
export function useFileInput({ onSetFile }: Props) {
  const [file, setFile] = useState<File>();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!!onSetFile && !!file) onSetFile(file);
  }, [file]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (!target.files) return setFile(undefined);
      setFile(target.files[0]);
    });
  }, [ref.current]);

  function onClick() {
    if (!ref.current) return;

    ref.current.click();
  }

  return { ref, onClick, file };
}
