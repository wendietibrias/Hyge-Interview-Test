interface SectionTitleProps {
  titleStacks: string[];
  badgeTitle: string;
  alignment: "center" | "right" | "left";
}

const SectionTitle = (props: SectionTitleProps) => {
  const { titleStacks, badgeTitle, alignment } = props;
  return (
    <div style={{ textAlign: alignment }}>
      <span className={`block bg-dark-secondary-bg w-max ${alignment === 'center' ? 'mx-auto' : ''} py-1 px-3 text-[0.75rem] rounded-full bg-dark-bg text-white text-center`}>
        {badgeTitle}
      </span>
      <div className="mt-3">
        {titleStacks.map((item: string, idx: number) => (
          <h2 className="text-dark-text font-semibold text-[2.3rem] leading-10" key={idx}>
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SectionTitle;
