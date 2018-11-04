import 'babel-polyfill';
import { Park } from '../src/models/park.model';
import { Bus } from '../src/models/bus.model';
import { Directions } from '../src/constants/direction.constant';

let chai = require('chai'),
path = require('path');

chai.should();

// let Bus = require(path.join(__dirname, '../src/models', 'bus.model.js')).Bus;
// let Directions = require(path.join(__dirname, '../src/constants', 'direction.constant.js')).Directions;
let Command = require(path.join(__dirname, '../src/components', 'command.component.js'));

describe('Command', () => {
    describe('#functions', () => {
      let bus = new Bus();
      let park = new Park();
      it('place a bus in (x,y) and face to direction', () => {
        Command.placeBus(bus,1,2,Directions.EAST).then(()=>{
            bus.xPosition.should.equal(1);
            bus.yPosition.should.equal(2);
            bus.direction.should.equal(Directions.EAST);
        })
      });

      it('move a bus', () => {
        Command.moveBus(bus, park).then( () =>{
            bus.xPosition.should.equal(2);
            bus.yPosition.should.equal(2);
            bus.direction.should.equal(Directions.EAST);
        });
      });

      it('bus won\'t move out', () => {
        bus.xPosition = park.width - 1;
        Command.moveBus(bus, park).then( stopped =>{
            stopped.should.equal(true);
            bus.xPosition.should.equal(park.width - 1);
            bus.yPosition.should.equal(2);
            bus.direction.should.equal(Directions.EAST);
        })
      });

      it('turn bus left', () => {
        Command.leftBus(bus).then(()=>{
            
            bus.direction.should.equal(Directions.NORTH);
        })
      });

      it('turn bus right', () => {
        Command.rightBus(bus).then(()=>{
            
            bus.direction.should.equal(Directions.EAST);
        })
      });

      it('report bus', () => {
        Command.reportBus(bus).then( report =>{
            report.should.be.a('string');
        })
      });
    });
});