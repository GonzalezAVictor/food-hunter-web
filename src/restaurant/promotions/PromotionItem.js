import React from 'react';
import { Icon, Switch, Modal, Button, TimePicker, DatePicker, InputNumber, Slider, Row, Col, notification } from 'antd';
import { COLOR } from './../../utils/constants';

import styled from 'styled-components';

const ItemContainer = styled.div`
  background-color: ${COLOR.LIGHTGRAY};
  margin: 5px 0px;
  border-radius: 8px;
  padding: 15px 15px;

  > i {
    font-size: 15px;
  }
`

const ButtonContainer = styled.div`
  > .ant-btn {
    margin-right: 12px;
  }
`

const PickersContainer = styled.div`

  > .ant-btn {
    float: right;
    bottom: 27px;
  }

  > span {
    margin-right: 10px;
  }
`

const PromotionName = styled.p`
  display: inline-block;
  font-size: 15px;
  margin-right: 8px;
`

const Actions = styled.div`
  width: 115px;
  display: inline-block;
  float: right;
  transform: translateY(-3px);

  > a  > i {
    font-size: 15px;
    margin: 3px 4px;
  }
`

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Error activating promotion',
    description: 'Please choose a correct date or time',
  });
};

export default class PromotionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDeleteVisible: false,
      modalActiveVisible: false,
      promotionActive: false,
      showActiveToday: false,
      showSchedule: false,
      duration: 30,
      startAt: ''
    }
    this.activePromotion = this.activePromotion.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.activeToday = this.activeToday.bind(this);
    this.schedule = this.schedule.bind(this);
    this.range = this.range.bind(this);
    this.disabledMinutes = this.disabledMinutes.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleActiveOk = this.handleActiveOk.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    let isActive = this.props.promotion.active === 1 ? true : false;
    this.setState({ promotionActive: isActive });
  }

  activePromotion() {
    this.setState({ 
      modalActiveVisible: true,
      promotionActive: true
    });
  }

  handleDelete() {
    this.setState({ modalDeleteVisible: true });
  }

  handledeleteOk = (e) => {
    this.setState({
      modalDeleteVisible: false,
    });
    this.props.deletePromotion(this.props.promotion.id);
  }

  handleActiveOk = (e) => {
    let { promotion } = this.props;
    let { startAt, duration } = this.state;
    promotion.startAt = startAt;
    if (promotion.startAt) {
      let endAt = startAt;
      promotion.endAt = endAt + (duration * 60); // duration * 60 = duration on seconds
      this.props.activePromotion(promotion);
    } else {
      openNotificationWithIcon('error')
      this.handleActiveCancel();
    }
    this.closeModal();
  }

  closeModal() {
    this.setState({
      modalActiveVisible: false,
    });
  }

  handleDeleteCancel = (e) => {
    this.setState({
      modalDeleteVisible: false,
    });
  }

  handleActiveCancel = (e) => {
    this.setState({
      modalActiveVisible: false,
      promotionActive: false
    });
  }

  activeToday() {
    this.setState({ 
      showActiveToday: true,
      showSchedule: false
    });
  }

  schedule() {
    this.setState({
      showActiveToday: true,
      showSchedule: true
    });
  }

  onChangeTime = (time) => {
    this.setState({
      startAt: time.unix()
    });
    console.log('time: ', time);
    console.log('time: ', time.unix());
  }

  range() {
    const result = [];
    for (let i = 0; i < 60; i++) {
      if (!(i === 0 || i === 15 || i === 30 || i === 45)) {
        result.push(i);
      }
    }
    return result;
  }

  disabledMinutes() {
    return this.range();
  }

  handleChangeDuration(value) {
    console.log('duration: ', this.state.duration);
    this.setState({
      duration: value,
    });
  }

  render() {
    let { promotion } = this.props;
    let { showSchedule, showActiveToday } = this.state;
    return (
      <ItemContainer>
        <PromotionName>
          { promotion.name }
        </PromotionName>
        { promotion.active ? <Icon type="check-circle-o" /> : null }
        <Actions>
          <a onClick={this.handleEdit} ><Icon type="edit" /></a>
          <a onClick={this.handleDelete} ><Icon type="delete" /></a>
          <Button onClick={this.activePromotion}>Active</Button>
        </Actions>
        <Modal
          title="Basic Modal"
          visible={this.state.modalDeleteVisible}
          onOk={this.handledeleteOk}
          onCancel={this.handleDeleteCancel}
        >
          <p>This accion will delete the promotion {promotion.name} permanently.</p>
          <p>Are you sure you want to continue?</p>
        </Modal>


        <Modal
          title={`Actie ${promotion.name} promotion`}
          visible={this.state.modalActiveVisible}
          onOk={this.handleActiveOk}
          onCancel={this.handleActiveCancel}
          footer={null}
        >
          <p>This action will active the promotion { promotion.name } and is not revertible.</p>
          <br/>
          <ButtonContainer>
            <Button type="primary" onClick={this.activeToday}>Today</Button>
            <Button type="primary" onClick={this.schedule}>Schedule</Button>
            <Button onClick={this.handleActiveCancel}>Cancel</Button>
          </ButtonContainer>
          <br/>
          <PickersContainer>
            { showSchedule ? 
              <div>
                Choose the day to active the promotion: <br/>
                <DatePicker footer={null} onChange={this.onChangeTime} />
              </div> : null }
            { showActiveToday ? 
              <div>
                Select the time to active the promotion: <br/>
                <TimePicker onChange={this.onChangeTime} format={'HH:mm'} disabledMinutes={this.disabledMinutes} hideDisabledOptions />
              </div> : null }
            { promotion.promotion_type === 'premium' && (showSchedule || showActiveToday) ?
              <div>
                Choose the amount of promotions availables: <br/>
                <InputNumber min={1} max={10} defaultValue={5} /*onChange={onChange}*/ />
              </div> : null }
            { showSchedule || showActiveToday ?
              <div>
              Choose the duration for the promotion:
              <Row>
                <Col span={12}>
                  <Slider min={0} max={150} step={15} onChange={this.handleChangeDuration} value={this.state.duration} />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={0}
                    max={150}
                    style={{ marginLeft: 16 }}
                    step={15}
                    value={this.state.duration}
                    onChange={this.handleChangeDuration}
                  />
                </Col>
                <Col span={2} offset={1}>
                  minutes
                </Col>
              </Row>
                <br/>
                <br/>
              </div> : null }
            { showSchedule || showActiveToday ?
              <Button type="primary" onClick={this.handleActiveOk}>Active promotion</Button> : null }
          </PickersContainer>
        </Modal>
      </ItemContainer>
    );
  }
}
