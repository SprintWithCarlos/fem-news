import "./picture.sass";
type PictureProps = {
  mobile: string;
  desktop: string;
};
const Picture: React.FC<PictureProps> = (props: PictureProps) => {
  const { mobile, desktop } = props;
  return (
    <picture data-testid="picture" className="picture">
      <source srcSet={desktop} media="(min-width: 769px)" />
      <img src={mobile} alt="" />
    </picture>
  );
};
export default Picture;
