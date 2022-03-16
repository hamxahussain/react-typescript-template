import fileDownload from 'js-file-download'
import axios from "axios";
//? Interfaces

export const isDecimal = (number: number): boolean => {
	return number % 1 != 0;
};
export {notify as notification} from "../../components/usable/Notification/notification"
export const downloadNow = (url: string, filename?: string) => {
  if(!url) return null
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename || `File__${Date.now()}`)
  })
}
