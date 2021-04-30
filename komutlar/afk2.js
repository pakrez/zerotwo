module.exports = ({
name:"$alwaysExecute",
code:`$setGlobalUserVar[afk;hayır]
$setGlobalUserVar[afks;]
$customEmoji[ptick] | $userTag[$authorID] Artık AFK Değil! Hoşgeldin Dostum
$onlyIf[$getGlobalUserVar[afkc]==2;]
$setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
$onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
$suppressErrors`
}) 
