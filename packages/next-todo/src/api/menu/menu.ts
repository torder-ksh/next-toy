import { axiosInstance } from "@/lib/axiosInstance";

// crm/admin/menus/nav
// export const requestGetUsedNavMenu = () => {
//   const res = axiosInstance.get("crm/admin/menus/nav");
//   return res;
// };

export const requestGetUsedNavMenu = async () => {
  const res = await fetch(
    `https://dev-apigw.torder.co.kr/crm/admin/menus/nav`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc1MjA3MDUsInVzZXJfbmFtZSI6IjIzMCIsImF1dGhvcml0aWVzIjpbIlJPTEVfR1VFU1QiXSwianRpIjoiYTlhY2NlNWQtZjBmMC00YTAzLWFmZTMtY2EyN2UwNTkxNDJiIiwiY2xpZW50X2lkIjoic3dpbmdjaGF0Iiwic2NvcGUiOlsiQVVUSCIsIm5hbWUiLCJlbWFpbCIsIkNSTSJdfQ.ehF6LMxBeHILL8vokmxh9vNWAjDLOiHNr27nC-DOIMwuYuOve3Wr-9csp89LanAXoKqZEj4OxwCvX8JCq1g7LzLTD_oIDoRtirchfYVjUArtub1XDforkfzDxqKKU7uITuJreAZEHEpamamMZmsYQrqOYXGfBYq1T_Iq2X0OpHufWfORiRdeJLSTPFvJhJTP6rUCa1vQnOvRrDhSaR0UzsXuMZSgem1WMKyNhu-86kSN72-Z2P0gOh6KxLEnkIEmVGprLWRtMsZ8zFrH4lhQbElrqN1v-MqFwfrSLuQ4kv056DLCCvGgC-NTQGGi_fWhhoRipUHtvVWyZ0yH68jkRA",
      },
    }
  );
  const result = await res.json();
  return result;
};
