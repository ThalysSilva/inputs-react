type Props = {
  onAction: () => void;
  zIndex?: number
};

export function useBackdrop({ onAction, zIndex = 10 }: Props) {
  function addBackdrop() {
    const backdropElement = document.createElement('DIV');
    backdropElement.addEventListener('click', () => onAction());
    backdropElement.id = 'backdropElement';
    backdropElement.classList.add(`fixed`);
    backdropElement.classList.add(`top-0`);
    backdropElement.classList.add(`w-screen`);
    backdropElement.style.height ='100vh';
    backdropElement.style.zIndex = (zIndex  -1).toString();
    const bodyElement = document.getElementsByTagName('body')[0];

    bodyElement.appendChild(backdropElement);
  }

  function removeBackdrop() {
    const backdropElement = document.getElementById('backdropElement') as Node;

    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.removeChild(backdropElement);
  }

  return { addBackdrop, removeBackdrop };
}
