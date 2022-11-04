import Button, { ButtonClass } from "@/design-system/atoms/button/Button";
import Picture from "@/design-system/atoms/picture/Picture";
import "./featured.sass";
const content = [
  {
    title: "Hydrogen VS Electric Cars",
    body: `Will hydrogen-fueled cars ever catch up to EVs? `,
  },
  {
    title: "The Downsides of AI Artistry",
    body: `What are the possible adverse effects of on-demand AI image
            generation?`,
  },
  {
    title: "Is VC Funding Drying Up?",
    body: `Private funding by VC firms is down 50% YOY. We take a look at what
            that means.`,
  },
];
type NewProps = {
  title: string;
  body: string;
};
const New = ({ content, isLast }: { content: NewProps; isLast: boolean }) => (
  <>
    <h4>{content.title}</h4>
    <p>{content.body}</p>
    {!isLast && <hr />}
  </>
);
const Featured: React.FC = () => {
  console.log("Component");
  return (
    <div data-testid="featured" className="featured">
      <div className="featured__first-block">
        <Picture
          desktop="image-web-3-desktop.jpg"
          mobile="image-web-3-mobile.jpg"
        />

        <div className="pivot">
          <div className="block">
            <h2> The Bright Future of Web 3.0?</h2>
          </div>
          <div className="block">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button type={ButtonClass.danger} onClick={() => {}}>
              <p>READ MORE</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="featured__second-block">
        <div className="block block-black">
          <h3>New</h3>
          {content.map((item: NewProps, i: number) => {
            return (
              <New
                content={item}
                isLast={content.length === i + 1}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Featured;
