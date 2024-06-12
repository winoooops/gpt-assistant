import axios, {AxiosInstance} from "axios";

export class AxiosClient {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }

  post<T>(url: string, body: T, config = {}) {
    return this.client.post(url, body, config);
  }
}