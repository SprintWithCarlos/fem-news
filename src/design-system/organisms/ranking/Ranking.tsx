import "./ranking.sass";
const rankingContent = [
  {
    title: "Reviving Retro PCs",
    body: "What happens when old PCs are given modern upgrades?",
    image: "image-retro-pcs.jpg",
  },

  {
    title: "Top 10 Laptops of 2022",
    body: "Our best picks for various needs and budgets.",
    image: "image-top-laptops.jpg",
  },
  {
    title: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
    image: "image-gaming-growth.jpg",
  },
];
const RankedItem = ({ content }: { content: Record<string, any> }) => {
  const { title, body, image, index } = content;
  return (
    <div className="row">
      <div className="block">
        <img src={image} alt={title} />
      </div>

      <div className="block">
        <h3>{`0${index + 1}`}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};
const Ranking: React.FC = () => {
  console.log("Component");
  return (
    <div data-testid="ranking" className="ranking">
      {rankingContent.map((item: Record<string, any>, index: number) => {
        let content: Record<string, any> = {};
        content = item;
        content["index"] = index;

        return <RankedItem content={content} key={item.title} />;
      })}
    </div>
  );
};
export default Ranking;
