import React, {Component } from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../eth/factory';
import Workstream from '../eth/workstream';
import web3 from '../eth/web3';
import Daotoken from '../eth/daotoken';
import Layout from '../components/Layout'
import { Link } from '../routes';

class WorkstreamIndex extends Component {

  static async getInitialProps(){
  //  console.log('factory is ', factory);
    const workstreams = await factory.methods.getDaoWorkstreams().call();
    const workstreamNames = await factory.methods.getDaoWorkstreamNames().call();

    const res = await factory.methods.getDaoTokenOwnerBalance().call();
    const dtokenAddr = res[0];
    const factoryAddr = res[1];
    const daoBal = res[2];
    const dtoken = Daotoken(dtokenAddr);

    //const appr = await dtoken.methods.approve(factoryAddr, daoBal).call();


    return {workstreams: workstreams,
            workstreamNames: workstreamNames,
            dtokenAddr: dtokenAddr,
            daoBal: daoBal};
  }

  renderWorktreams(){
    var items = this.props.workstreams.map(address => {
      return {
        header: address,
        description: (
          <Link route ={`/workstreams/${address}`}>
            <a>View Workstream</a>
          </Link>
          ),
        fluid: true
      };
    });
    var itemNames = this.props.workstreamNames;
    console.log(itemNames);
    items.forEach(function (item, index) {
      item['header'] = itemNames[index];
    });
    return <Card.Group items={items}/>;
  }

  render (){
    return(
      <Layout>
      <div>
      <h5> DAO Balance is {this.props.daoBal} </h5>
      <div></div>

      <h3>Current Workstreams</h3>
      <Link route="/workstreams/new">
      <a>
        <Button floated="right" content="Create Workstream" icon="add circle" primary />
      </a>
      </Link>
    {this.renderWorktreams()}
    </div>
    </Layout>

  );
  }
}
export default WorkstreamIndex
