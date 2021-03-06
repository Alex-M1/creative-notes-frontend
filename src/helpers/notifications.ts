import i18next from 'i18next';
import { toast } from 'react-toastify';

export const notifications = (options: INotifications): void => {
  const { type, time, message } = options;
  toast[type || 'error'](i18next.t(message), {
    position: 'bottom-right',
    autoClose: time || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export interface INotifications {
    message: string;
    type?: 'warn' | 'success' | 'error',
    time?: number
}
