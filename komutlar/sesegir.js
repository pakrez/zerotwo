module.exports = {
name: "sese-gir",
code:`
Sesli kanala girdim!
$djsEval[message.member.voice.channel.join();]
$onlyBotPerms[connect;Sesli kanala girebilmem için \`\`Bağlan\`\` yetkisine sahip olmam gerekmekte.]
$onlyIf[$voiceID!=;Sesli kanalda değilsin]
`
}



