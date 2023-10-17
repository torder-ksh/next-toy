import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://dev-apigw.torder.co.kr",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc1MjAxNzAsInVzZXJfbmFtZSI6IjIzMCIsImF1dGhvcml0aWVzIjpbIlJPTEVfR1VFU1QiXSwianRpIjoiMjBkODEyM2YtYWE1Mi00MjQ3LTllYWUtM2IxZmQxYTM3MWJhIiwiY2xpZW50X2lkIjoic3dpbmdjaGF0Iiwic2NvcGUiOlsiQVVUSCIsIm5hbWUiLCJlbWFpbCIsIkNSTSJdfQ.hXmRZXy49SrOVx88QOyee0bBxsZ9pcUWeDKkKtwjo4nlPKeyqB-32gfEzCoBmmLH6XyFaD9nGB6gGWFxf0Qb7QL2eSIIErUeh1go3nkqkyLATrFEBNzWrH2DiKFFvSxulNODORXT3Oru4pXaY7IqgRAo2zjGjcPcJm1sGRSnRM3PLJUzWQGuWV2ae-CzSdO2TGhISfk4c_3IHZyukrehYO1hkwtqw-VT0b6Zl1RFESvCP99o6elU3kMbZtap2MNbR__GzsVl8SfXoegm43_Pq8ylP5e2vj3lBqK-VShiudhLh_WLfKaKz3RhJgZ2kuHbrJ-BNQVcHXOeV8_spsFrbg",
  },
});
