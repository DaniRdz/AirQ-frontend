import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faTint,
  faArrowDown,
  faWind,
  faLocationArrow,
  faSearch,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    faTrash,
    faTint,
    faArrowDown,
    faWind,
    faLocationArrow,
    faSearch,
    faChevronUp,
    faChevronLeft,
    faChevronRight
  );
};

export default Icons;
