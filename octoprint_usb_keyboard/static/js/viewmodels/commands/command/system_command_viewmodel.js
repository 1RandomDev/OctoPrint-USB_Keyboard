function CommandsCommandSystemCommandViewModel(params) {
  var self = this
  Lockable.call(self, "action", params.locked)
  SelfManaged.call(self, params.parentArray, params.commandActionObject)
  ShowsInfo.call(self)


  // console.log("CommandsCommandSystemCommandViewModel raw", params)
  // console.log("CommandsCommandSystemCommandViewModel self", self)

  self.profile = params.profile;
  self.type = params.commandActionObject.type;
  self.command = params.commandActionObject.command;
}
ko.components.register('sfr-commands-command-system-command', {
  viewModel: CommandsCommandSystemCommandViewModel,
  template: { element: 'template-sfr-commands-command-system-command' }
});
