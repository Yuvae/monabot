const  Discord  = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log(message)
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Objet obtenable')
    .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282138980122674/1.jpg')
    .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
    .setColor('GREY')
    .addField('Jour :', `Mardi`)
    .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
    .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
    .setThumbnail('https://cdn.discordapp.com/attachments/767802769339842622/820281863847018516/Sans_titre_4.png')
    .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282138980122674/1.jpg')
    )
}

module.exports.help = {
    name: "mardi",
    description: "*Fiche quotidienne de **Mardi**.*",
    category: "donjon"
}