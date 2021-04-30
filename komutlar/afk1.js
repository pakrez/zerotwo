

module.exports = ({
name:"$alwaysExecute",
code:`$customEmoji[pcross] | **Etiketlediğiniz kişi \`$getGlobalUserVar[afks;$mentioned[1]]\` sebebinden AFK.**
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
$suppressErrors`
})


