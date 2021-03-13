module.exports.run = async (client, message, args) => {

    return message.channel.send("https://www.genshin-impact.fr/map/");

}

module.exports.help = {
    name: "map",
    description: "*map dynamique de Genshin-Impact.*",
    category: "Général"
}