"use client"
import Carousel from 'react-bootstrap/Carousel';
import BootstrapIcon from "../bootstrap-icon";
import Image from 'next/image';
import styles from './style.module.css'
import { HomeSearchDocBy } from '@/common/consts'
import { useEffect, useState } from 'react';
import Account from '@/modules/layout/components/header-top/account';
import { useAppContext } from '@/lib/context/app-context';
interface ICarouselItem {
  Content:String;
  Image:any;
}
interface Props {
  items: ICarouselItem[]
}
const Index = (props: Props) => {
  const { webInfo } = useAppContext();
  const [formSeach, setFormSearch] = useState({ Keyword: "", Option: "all"});
  const [searchDocName, setSearchDocName] = useState(HomeSearchDocBy[0].label);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const ClientSearchNews = () => {
    let doc:any = document;
    let keyword = doc.getElementById("keyword").value;
    if(keyword && formSeach.Option) {
      let option;
      for(var i = 0;i < HomeSearchDocBy.length;i++)
      {
        if(formSeach.Option == HomeSearchDocBy[i].value)
        {
          option = HomeSearchDocBy[i].cLabel;
          break;
        }
      }
      window.location.href = "/tra-cuu-du-lieu/" + option + "/" +  encodeURIComponent(keyword)
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event: any) => {
    if (event.keyCode == 13) {
      if(isInputFocused) {
        ClientSearchNews()
      }
    }
  };

  const CarouselItem = (items:any) => {
    let html:any = [];
    for(let i = 0;i < items.length;i++)
    {
      html.push(<Carousel.Item key={i} className="carousel-banner">
        <Carousel.Caption className={styles["carousel-caption-custom"]}>
        </Carousel.Caption>
        {/* <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg> */}
        <div style={{background: "linear-gradient(206.57deg, rgb(130 130 130 / 64%) 0%, rgba(91, 91, 91, 0.49) 100%) 0px 0px / 100% no-repeat", width: "100%", height: "100%", position: "absolute", zIndex: 1 }}></div>
        <img className="w-100 h-100" src={process.env.FILE_URL+ items[i].Image}/>
      </Carousel.Item>) 
    }
    return html;
  }
  const onBlur = () => {
    let doc:any = document;
    setFormSearch({
      ...formSeach, 
      Keyword: doc.getElementById("keyword").value
    })
    setIsInputFocused(false)
  }
  const InputSearch = () => {
    return <div className={"wapper-search-content"}>
              <div className="row">
                <div className="col-sm-12">
                </div>
              </div>
                <div className="d-flex mb-5 d-none d-md-flex">
                  <h4 className='m-auto text-white'>{webInfo && webInfo.bannerTitle}</h4>
                </div>
                <div className="d-flex mb-4 d-md-none d-block">
                  <h6 className='m-auto text-white'>{webInfo && webInfo.bannerTitle}</h6>
                </div>
                <div className="row">
                  <div className="pr-0-i pl-0-i dropdown col-md-3 col-3">
                    <button className={styles["bh-option"] + " bh-option btn btn-secondary dropdown-toggle w-100 input-mobile input-mobile-select"} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="bh-option-truncate">{searchDocName}</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {
                        HomeSearchDocBy.map((e, ie) => {
                          return <li key={ie}><span className="dropdown-item c-poi" onClick={() => { setSearchDocName(e.label); setFormSearch({...formSeach, Option: e.value}); }}>{e.label}</span></li>
                        })
                      }
                    </ul>
                  </div>
                  <div className="pr-0-i pl-0-i col-md-9 col-9 d-flex">
                    <input id="keyword" onFocus={() => setIsInputFocused(true)} onBlur={() => onBlur()} onChange={(e) => { let doc:any = document; if(doc) { doc.getElementById("keyword").value = e.target.value; } setFormSearch({...formSeach, Keyword: e.target.value}) }} value={formSeach.Keyword} type="text" className={styles["bh-keyword"] + " col-12 d-md-block d-none"} placeholder="Nhập từ khóa tìm kiếm ..." />
                    <input id="keyword" onFocus={() => setIsInputFocused(true)} onBlur={() => onBlur()} onChange={(e) => { let doc:any = document; if(doc) { doc.getElementById("keyword").value = e.target.value; } setFormSearch({...formSeach, Keyword: e.target.value}) }} value={formSeach.Keyword} type="text" className={styles["bh-keyword"] + " col-12 input-mobile d-block d-md-none"} placeholder="Nhập từ khóa ..." />
                    
                    <button onClick={()=>ClientSearchNews()} className={styles["bh-search"] + " d-md-block d-none bh-search"}>
                      <BootstrapIcon fontSize={14} className="text-white" iconName="Search" />
                    </button>
                    <BootstrapIcon onClick={()=>ClientSearchNews()} iconName="Search" className={styles["bh-search"] + " text-theme d-block d-md-none bh-search input-mobile-search"} />
                  </div>
                </div>
            </div>
  }
  return (
    <>
      <div className={"wapper-search " + styles["wapper-seach-content"] + " w-100"}>
            {InputSearch()}
      </div>
      <Carousel controls={false} indicators={props.items.length == 1 ? false : true}>
        {CarouselItem(props.items)}
      </Carousel>
    </>
  );
};

export default Index;
