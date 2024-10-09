import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IResponseMessage } from "@/common/models";
// import ItemService from "@/services/item-service";
interface Props {}
const Index = (props: Props) => {
  const [items, setItems] = useState<any>([]);
  // useEffect(() => {
  //   getItems();
  // }, []);
  // const getItems = async () => {
  //   var res: IResponseMessage = await ItemService.GetDocsNew();
  //   if (res.Success) {
  //     if (res.Data && res.Data.length > 0) {
  //       setItems(res.Data);
  //     }
  //   }
  // };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const OnShowDetail = (id: any) => {
    window.open("/chi-tiet-tai-lieu/" + id, "_blank");
  };
  const DocNew = () => {
    let html: any = [];
    for (let i = 0; i < items.length; i++) {
      html.push(
        <div key={i} className={"" + styles["doc-new-home"]}>
          <div className="text-center">
            <img
              className={"rounded shadow " + styles["img-doc-new-home"]}
              src={
                items[i].cover_photo
                  ? items[i].cover_photo
                  : process.env.FILE_URL + "images/nothumb.jpg"
              }
            />
          </div>
          <a
            href={"#"}
            onClick={() => {
              OnShowDetail(items[i].id);
            }}
            className={
              "width-title-doc mb-2 fs-6 font-weight-bold " +
              styles["doc-title"]
            }
          >
            {items[i].title}
          </a>
          <p
            className={
              "image-doc mt-2 mb-2 text-secondary " + styles["doc-image"]
            }
          >
            Năm xuất bản: {items[i].year_pub}
          </p>
        </div>
      );
    }
    return html;
  };
  return (
    <div className="container">
      {items && items.length > 0 ? (
        <div className="d-flex">
          <span
            className="text-center fs-3 mt-2 mb-4 text-theme"
            style={{ margin: "auto", borderBottom: "2px solid #1074C3" }}
          >
            Giới thiệu sách
          </span>
        </div>
      ) : (
        <></>
      )}
      <div className="">
        <Carousel
          className="max-w-5xl m-auto"
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={true}
          customTransition={"transform 300ms ease-in-out"}
          autoPlaySpeed={10000}
          rewind={true}
          keyBoardControl={false}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass={styles["dot-list-style"]}
          itemClass={"carousel-docs"}
        >
          {DocNew()}
        </Carousel>
      </div>
    </div>
  );
};
export default Index;
