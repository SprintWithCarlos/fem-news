/* eslint-disable implicit-arrow-linebreak */
import { Link } from "react-router-dom";
import Icon from "@/design-system/atoms/icon/Icon";
import { capitalize } from "@/utils";
import { ReactComponent as CloseIcon } from "@/assets/images/icon-menu-close.svg";
import "./sidebar.sass";

type SidebarProps = {
  content: {
    name: string;
    url: string;
  }[];
  state: {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
  };
};
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { content, state } = props;

  return (
    <div data-testid="sidebar" className="sidebar">
      {state.isOpen && <div className="modal" />}
      <div
        className={state.isOpen ? "container container-isOpen" : "container"}
      >
        <div className="sidebar__top">
          <button
            aria-label="close sidebar"
            type="button"
            data-testid="draw-c"
            className="close"
            onClick={() => state.setIsOpen(!state.isOpen)}
          >
            <Icon
              name="close"
              src={<CloseIcon />}
              size={{ width: "px", height: "px" }}
            />
          </button>
        </div>
        <ul>
          {content.map((item) => (
            <li key={item.name}>
              <Link to={item.url} key={item.name}>
                <span>{capitalize(item.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
