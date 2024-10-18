import fetch from "@/common/request";

const Service = "Car_RegisterStatistic";
const RegisterStatisticServices = {
  GetRegisterStatistic: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-register-statistic`,
      method: "post",
    });
    return res;
  },
  GetRegisterStatisticChart: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-register-statistic-chart`,
      method: "post",
    });
    return res;
  },
  GetRegisterStatisticPieChart: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-register-statistic-piechart`,
      method: "post",
    });
    return res;
  },
};
export default RegisterStatisticServices;
