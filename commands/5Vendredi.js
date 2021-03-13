const  Discord  = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log(message)
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Objet obtenable')
    .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282137478561822/2.jpg')
    .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
    .setColor('GREY')
    .addField('Jour :', `Vendredi`)
    .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
    .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
    .setThumbnail('https://cdn.discordapp.com/attachments/767802769339842622/820282276209885234/Sans_titre_7.png')
    .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282137478561822/2.jpg')
    )
}

module.exports.help = {
    name: "vendredi",
    description: "*Fiche quotidienne de **Vendredi**.*",
    category: "donjon"
}