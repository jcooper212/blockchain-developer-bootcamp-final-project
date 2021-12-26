import React, {Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../eth/factory';
import Daotoken from '../../eth/daotoken';
import Workstream from '../../eth/workstream';
import web3 from '../../eth/web3';
import RequestRow from './row_request';

import { Form, Button, Input, Message, Table } from 'semantic-ui-react';
import { Link, Router } from '../../routes';


class RequestIndex extends Component {
  static async getInitialProps(props){
    const { address } = props.query;
    const workstream = Workstream(address);
    const requestCount = await workstream.methods.getRequestLength().call();
    const daoBal =  await workstream.methods.balance().call();
    const wkOwner = await workstream.methods.getWorkstreamOwner().call();
    const daoOwner = await workstream.methods.getDaoOwner().call();
    const tokenAddr = await factory.methods.getDaoToken().call();
    const daotoken = Daotoken(tokenAddr);
    console.log("wk dao ", wkOwner, daoOwner, tokenAddr, daoBal);


    const requests = await Promise.all(
      Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return workstream.methods.requests(index).call();
      })
    );
    //console.log("req ", address, requestCount, requests);
    return {address, requests, requestCount, daoBal};
  }

  renderRow(){
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
            key={index}
            request={request}
            address={this.props.address}
        />
      );
    });
  }
  render(){
    const {Header, Row, HeaderCell, Body} = Table;
    return (
      <Layout>
      <h3>Payment Requests</h3>
        <Link route={`/workstreams/${this.props.address}/new_request`}>
        <a>
          <Button primary floated="right" style={{marginBottom:10}}>New Payment</Button>
        </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approved by Lead</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Pay</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRow()}
          </Body>
        </Table>
        <div> Found {this.props.requestCount}  requests. The DAO Balance is: {this.props.daoBal}  </div>
      </Layout>
    );
  }
}

export default RequestIndex;
