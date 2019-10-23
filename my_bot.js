const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    client.user.setActivity("Youtube", {type: "WATCHING"})
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} ${channel.type} - ${channel.id}`)
        })
    })
    let generalChannel = client.channels.get("628596557591085089")
    const attachment = new Discord.Attachment("")
    generalChannel.send("Hello world!")
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    receivedMessage.channel.send("Message received: " + receivedMessage.author.toString()
    + receivedMessage.content)
    receivedMessage.react("💦")
})




client.login("NjM0ODQyNDkyOTg2MTk1OTk2.XaoZLw.OMQ8Ct1YUt9tAmdeXY-HuPCEGL0")