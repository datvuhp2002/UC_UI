import fetch from "@/common/request";

const Service = "Car_feedback";
const FeedbackLibraryServices = {
  Feedback: async (data: any) => {
    let res: any = await fetch({
      url: `/${Service}/insert`,
      method: "post",
      data,
    });
    return res;
  },
};
export default FeedbackLibraryServices;
