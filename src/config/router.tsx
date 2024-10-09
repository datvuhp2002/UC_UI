import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { publicRoute } from "./index";
import {
  faBookAtlas,
  faChalkboardTeacher,
  faEnvelopeOpenText,
  faHome,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const directPublicRoutes = [
  {
    path: publicRoute.dashboard,
    name: "Trang chủ",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    path: publicRoute.dangKyThe,
    name: "Đăng ký",
    icon: <FontAwesomeIcon icon={faBookAtlas} />,
  },
  {
    path: publicRoute.traCuuThongTinThe,
    name: "Tra cứu",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  {
    path: publicRoute.huongDan,
    name: "Huớng dẫn",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
  },
  {
    path: publicRoute.gopY,
    name: "Góp ý",
    icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
  },
];
export { directPublicRoutes };
