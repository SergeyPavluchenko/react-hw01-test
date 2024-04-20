import {
  ListBlock,
  NameBlock,
  StatisticsBlock,
  StatisticsStyled,
  UnorderedListBlock,
} from './StatisticsStyled';

export const Statistics = ({ datas }) => {
  return (
    <StatisticsStyled className="statistics">
      <StatisticsBlock>
        <NameBlock>
          <h2 className="title">Upload stats</h2>
        </NameBlock>
        <UnorderedListBlock>
          {datas.map(data => {
            return (
              <ListBlock
                key={data.id}
                style={{ backgroundColor: randomColor() }}
              >
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}%</span>
              </ListBlock>
            );
          })}
        </UnorderedListBlock>
      </StatisticsBlock>
    </StatisticsStyled>
  );
};

function randomColor() {
  let colorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  return colorCode;
}
