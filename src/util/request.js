import React from "readt";
import axios from "axios";

const request = axios.create({
  baseURL: "https://apps.kaipharm.com/kmapinfo/api",
});

export default request;
