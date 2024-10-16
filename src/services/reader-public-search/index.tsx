import fetch from "@/common/request";

const Service = "Car_ReaderPublishSearch";
const ReaderPublicSearch = {
  Search: async (data: any) => {
    let res: any = await fetch({
      url: `/${Service}/search`,
      method: "post",
      data,
    });
    return res;
  },
};
export default ReaderPublicSearch;
