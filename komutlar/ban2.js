module.export = {
  name: "ban",
  code:`$channelSendMessage[$getServerVar[banlog];{description:<@$mentioned[1]> Adlı Kullanıcı <@$authorID> Adlı Yetkiliniz Tarafından \`$noMentionMessage\` Sebebinden Banlandı}{footer:Zero Two Ban Sistemi}{color:303136}]
  $onlyPerms[ban;]
  $onlyBotPerms[ban;]
  $onlyIf[$message!=;]
  $onlyIf[$mentioned[1]!=;]
  $onlyIf[$mentioned[1]!=$ownerID;]
  $suppressErrors
  
  `
  }