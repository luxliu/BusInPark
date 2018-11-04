let chai = require('chai'),
path = require('path');

chai.should();

let Bus = require(path.join(__dirname, '../src/models', 'bus.model.js')).Bus;
let Directions = require(path.join(__dirname, '../src/constants', 'direction.constant.js')).Directions;

describe('Bus', () => {
    describe('#xPosition', () => {
      let bus;
  
      beforeEach(() => {
        bus = new Bus(1, 2, Directions.NORTH);
      });

      it('returns the xPosition', () => {
        bus.xPosition.should.equal(1);
      });

      it('returns the yPosition', () => {
        bus.yPosition.should.equal(2);
      });

      it('returns the direction', () => {
        bus.direction.should.equal(Directions.NORTH);
      });
  
      it('x can be changed', () => {
        bus.xPosition = 2;
        bus.xPosition.should.equal(2);
      });
  
      it('x only accepts numerical values', () => {
        (() => {
            bus.xPosition = 'foo';
        }).should.throw(Error);
      });

      it('y can be changed', () => {
        bus.yPosition = 3;
        bus.yPosition.should.equal(3);
      });
  
      it('y only accepts numerical values', () => {
        (() => {
            bus.yPosition = 'foo';
        }).should.throw(Error);
      });
      it('direction can be changed', () => {
        bus.direction = Directions.EAST;
        bus.direction.should.equal(Directions.EAST);
      });
  
      it('direction only accepts one of NORTH, SOUTH, EAST, WEST', () => {
        (() => {
            bus.direction = 'SOUTHEAST';
        }).should.throw(Error);
      });

    })
});