import { toast } from 'react-toastify';
export const Notifier = {
  error: message =>
    toast.error(message, {
      toastId: 13
    }),
  info: message =>
    toast.info(message, {
      toastId: 14
    }),
  success: message => toast.success(message, { toastId: 15 })
};
