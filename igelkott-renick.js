var Renick = function renick() {
  this.listeners = {'433': this.renick, '451': this.renick};
};

// Change nick and try to reconnect
Renick.prototype.renick = function renick() {
  this.igelkott.config.server.nick = this.igelkott.config.server.nick+'_';
  this.igelkott.emit('connect');
};

exports.Plugin = Renick;

