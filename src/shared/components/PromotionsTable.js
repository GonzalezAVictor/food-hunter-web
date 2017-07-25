import React from 'react';
import { Table, Icon } from 'antd';
import styled from 'styled-components';

const TableContainer = styled.div`
  td {
    // text-align: center;
  }
`
const TdCenter = styled.div`
  text-align: center;
`  

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: <TdCenter>Type</TdCenter>,
  dataIndex: 'promotion_type',
  render: text => <TdCenter>{text}</TdCenter>,
}, {
  title: <TdCenter>Times activated</TdCenter>,
  dataIndex: 'times_activated',
  render: text => <TdCenter>{text}</TdCenter>,
}];

export default class PromotionsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  createPromotionsList() {
    if (this.props.promotions !== undefined) {
      this.props.promotions.map((promotion) => {
        console.log(promotion);
      });
    }
  }

  render() {
    return (
      <TableContainer>
        <Table columns={columns} dataSource={this.props.promotions} />
      </TableContainer>
    );
  }
}
