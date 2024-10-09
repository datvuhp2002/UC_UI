import fetch from "@/common/request";

const Service = "Car_register";
const RegisterLibraryServices = {
  Register: async (data: any) => {
    let res: any = await fetch({
      url: `/${Service}/insert-item`,
      method: "post",
      data,
    });
    return res;
  },
  GetCardObjectType: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-cardobjecttype`,
      method: "get",
    });
    return res;
  },
  GetCardType: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-cardtype`,
      method: "get",
    });
    return res;
  },
  GetCardCatalog: async () => {
    let res: any = await fetch({
      url: `/${Service}/get-cardcatalog`,
      method: "get",
    });
    return res;
  },
  UploadAvatar: async (data: File) => {
    var formData = new FormData();
    formData.append("file", data);
    console.log("FORM :::", formData);
    let res: any = await fetch({
      url: `/${Service}/upload-avatar`,
      method: "post",
      data: formData,
    });
    return res;
  },
};
export default RegisterLibraryServices;
