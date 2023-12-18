import { toast } from 'react-toastify';

const toastinfo = (message) => {
    toast.info(message);
}
const toastsuccess = (message) => {
    toast.success(message, {autoClose: 2000,hideProgressBar: true,});
}
const toastwarning = (message) => {
    toast.warning(message);
}
const toasterror = (message) => {
    toast.error(message);
}
export {toastinfo, toastsuccess, toastwarning, toasterror}