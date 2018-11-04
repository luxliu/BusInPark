let chai = require('chai'),
path = require('path');

chai.should();

let Park = require(path.join(__dirname, '../src/models', 'park.model.js')).Park;

describe('Park', () => {
    describe('#properties', () => {
      let park;
  
      beforeEach(() => {
        park = new Park(5,5);
      });

      it('returns the width', () => {
        park.width.should.equal(5);
      });

      it('returns the length', () => {
        park.length.should.equal(5);
      });
  
      it('width can be changed', () => {
        park.width = 2;
        park.width.should.equal(2);
      });
  
      it('width only accepts numerical values', () => {
        (() => {
            park.width = 'foo';
        }).should.throw(Error);
      });

      it('length can be changed', () => {
        park.length = 3;
        park.length.should.equal(3);
      });
  
      it('length only accepts numerical values', () => {
        (() => {
            park.length = 'foo';
        }).should.throw(Error);
      });

      it('check if bus is in park', () =>{
        let Bus = require(path.join(__dirname, '../src/models', 'bus.model.js')).Bus;
        const bus = new Bus(0,0);
        park.insidePark(bus).should.equal(true);
        bus.xPosition = 10;
        park.insidePark(bus).should.equal(false);
        bus.xPosition = -1;
        park.insidePark(bus).should.equal(false);
      })

    })
});