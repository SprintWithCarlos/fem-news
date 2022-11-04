import LoaderEllipsis from "../loader-ellipsis/Loader-ellipsis";
import "./loading.sass";
const Loading: React.FC = () => {
  console.log("Component");
  return (
    <div data-testid="loading" className="loading">
      <LoaderEllipsis color="white" />
    </div>
  );
};
export default Loading;
