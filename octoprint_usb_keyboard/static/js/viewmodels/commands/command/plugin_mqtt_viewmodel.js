function CommandsCommandPluginMqttViewModel(params) {
  var self = this
  Lockable.call(self, "action", params.locked)
  SelfManaged.call(self, params.parentArray, params.commandActionObject)
  ShowsInfo.call(self)


  // console.log("CommandsCommandPluginMqttViewModel raw", params)
  // console.log("CommandsCommandPluginMqttViewModel self", self)

  self.profile = params.profile;
  self.type = params.commandActionObject.type;
  self.message = params.commandActionObject.message;
  self.topic = params.commandActionObject.topic;
  self.retained = params.commandActionObject.retained;
}
ko.components.register('sfr-commands-command-plugin-mqtt', {
  viewModel: CommandsCommandPluginMqttViewModel,
  template: { element: 'template-sfr-commands-command-plugin-mqtt' }
});
