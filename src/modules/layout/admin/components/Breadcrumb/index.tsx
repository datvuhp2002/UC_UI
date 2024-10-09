import BootstrapIcon from "@/modules/common/components/bootstrap-icon";
import { useRouter } from "next/navigation";

interface Props {
  title: any;
  showBack: any;
}
const Breadcrumb = (props: Props) => {
  const router = useRouter();

  return (
    <div className="d-sm-flex">
      {props.showBack ? (
        <div
          className="back"
          onClick={() => {
            router.back();
          }}
        >
          <BootstrapIcon iconName="ArrowLeft" />
          {" Quay lại"}
        </div>
      ) : (
        <></>
      )}
      <label className="ms-auto text-secondary">
        <BootstrapIcon iconName="Link45deg" />
        {" " + props.title}
      </label>
    </div>
  );
};
export default Breadcrumb;
