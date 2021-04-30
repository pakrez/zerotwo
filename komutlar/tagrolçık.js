module.exports = ({
    name:"$alwaysExecute",
    code:`$customEmoji[zttakla] | Tagımızdan çıktığın için \`$roleName[$getServerVar[tagrol]]\` rolün alındı
    $dm[$authorID]
    $setUserVar[tagmesaj;almadı]
    $takeRole[$authorID;$getServerVar[tagrol]]
    $onlyIf[$getUserVar[tagmesaj]==aldı;]

$onlyIf[$checkContains[$toLowerCase[$username;$getServerVar[tag]]]==false;]
    $suppressErrors`
}) 
