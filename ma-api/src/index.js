import postal from 'postal';

const _channels = {};

const publish = (channel, topic, data) => {
  channel.publish.call(channel, topic, data);
};

const subscribe = (channel, topic, cb) => {
  channel.subscribe.call(channel, topic, cb);
};

const channel = (name) => {
  if (name === undefined) {
    return Object.keys(_channels).sort();
  }
  if (!_channels[name]) {
    _channels[name] = postal.channel(name);
  }
  return {
    publish: wrapWithChannel(publish, _channels[name]),
    subscribe: wrapWithChannel(subscribe, _channels[name]),
  };
};

const wrapWithChannel = (fn, channel) => {
  return (...args) => {
    fn.apply(null, [channel, ...args]);
  };
};

const maApi = {
  channel
};

export default maApi;
