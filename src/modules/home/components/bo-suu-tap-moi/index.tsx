import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { IResponseMessage } from "@/common/models";
// import ItemService from "@/services/item-service";

interface Props {}
const Index = (props: Props) => {
  const [items, setItems] = useState<any>([]);
  // useEffect(() => {
  //   getItems();
  // }, []);
  // const getItems = async () => {
  //   var res: IResponseMessage = await ItemService.GetCollectionsNew();
  //   if (res.Success) {
  //     if (res.Data && res.Data.length > 0) {
  //       setItems(res.Data);
  //     }
  //   }
  // };
  const OnShowDetail = (url: any) => {
    window.open(url, "_blank");
  };
  const News = () => {
    let html: any = [];
    for (let i = 0; i < items.length; i++) {
      html.push(
        <div key={i} className="col-md-4 col-12">
          <div className="p-1 position-relative">
            <img
              className={
                "rounded shadow img-doc-new-home " + styles["img-doc-new-home"]
              }
              src={
                process.env.FILE_URL + "images/collection" + (i + 1) + ".jpg"
              }
            />
            <div className="card-body">
              {items[i].type == 6 ? (
                <p className="mb-0-i">
                  <a
                    href="#"
                    onClick={() => {
                      OnShowDetail(items[i].target_url);
                    }}
                    className={
                      "fs-6 font-weight-bold mb-2 " + styles["doc-title"]
                    }
                  >
                    {items[i].title}
                  </a>
                </p>
              ) : (
                <p className="mb-0-i">
                  <a
                    href="#"
                    onClick={() => {
                      OnShowDetail(
                        (items[i].db_type == "pdoc"
                          ? "/bo-suu-tap-tai-lieu-in"
                          : "/bo-suu-tap-tai-lieu-so") +
                          "?code=" +
                          items[i].id
                      );
                    }}
                    className={
                      "fs-6 font-weight-bold mb-2 " + styles["doc-title"]
                    }
                  >
                    {items[i].title}
                  </a>
                </p>
              )}
              <>
                {items[i].db_type == "pdoc" ? (
                  <span className="bst-so">Bộ sưu tập in</span>
                ) : (
                  <span className="bst-in">Bộ sưu tập số</span>
                )}
              </>
              <span
                className={"d-block d-md-none " + styles["border-title"]}
              ></span>
            </div>
          </div>
        </div>
      );
    }
    return html;
  };
  return <div className="row">{News()}</div>;
};
export default Index;
