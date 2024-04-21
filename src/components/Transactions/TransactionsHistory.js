import {
  SectionTransactions,
  Table,
  TbodyStyle,
  TdStyle,
  ThStyle,
} from './TransactionStyled';

export const TransactionsHistory = ({ items }) => {
  console.log(items);
  return (
    <SectionTransactions>
      <Table>
        <thead>
          <tr>
            <ThStyle>Type</ThStyle>
            <ThStyle>Amount</ThStyle>
            <ThStyle>Currency</ThStyle>
          </tr>
        </thead>

        <TbodyStyle>
          {items.map(({ id, amount, type, currency }) => (
            <tr key={id}>
              <TdStyle>{type}</TdStyle>
              <TdStyle>{amount}</TdStyle>
              <TdStyle>{currency}</TdStyle>
            </tr>
          ))}
        </TbodyStyle>
      </Table>
    </SectionTransactions>
  );
};
