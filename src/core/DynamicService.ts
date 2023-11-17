import ApiService from "./HttpService";
import { toast } from "react-toastify";

type  DynamicServiceProps = {
  service: string;
  payload?: Object;
  toastify?: Boolean;
  toastifyMessage?: string;
  file?: any;
}

const DynamicService = async (props: DynamicServiceProps) => {
  const {
    service,
    payload,
    toastifyMessage = "successfull",
    toastify = true,
    file,
  } = props;

  let servicePayload;
  servicePayload = { service };

  payload &&
    (servicePayload = {
      service,
      payload,
    });

  servicePayload = JSON.stringify(servicePayload);
  try {
    let myForm = new FormData();
    myForm.append("request", servicePayload);
    if (file) {
      myForm.append("file", file);
    }

    let data = await ApiService.get("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        //toastify === true && toast.success(toastifyMessage);
        return response.data;
      }
    );
    return data;
  } catch (ex: any) {
    toastify === true && toast.error(ex.response?.data?.service_message);
    return false;
  }
};

export default DynamicService;
