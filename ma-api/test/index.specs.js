import maApi from '../src/index';
import chai from 'chai';
const expect = chai.expect;
chai.should();

describe('api', function() {
  describe('channel', function() {
    it('is a function', function() {
      expect(maApi.channel).to.be.an('function');
    });

    it('returns a new channel', function() {
      expect(maApi.channel('testchannel'))
        .to.be.an('object')
        .and.to.have.all.keys(['publish', 'subscribe']);
      expect(maApi.channel()).to.eql(['testchannel']);
    });

    it('can subscribe and publish', function() {
      const ch = maApi.channel('testchannel');
      let success = false;
      ch.subscribe('some:topic', () => {
        success = true;
      });
      ch.publish('some:topic', {});
      expect(success).to.equal(true);
    });
  });
});
