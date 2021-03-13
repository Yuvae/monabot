
/*
        "◀": "previous",
        "▶": "next"
*/

const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

/*
Page 1 - Aceuil
Page 2 - Commande
Page 3 - Information
*/
module.exports.run = async (bot, message, args) => {
    console.log(message)
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820270396514500618/1.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820270396514500618/1.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282138980122674/1.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282138980122674/1.jpg')
        .setFooter('Page 2/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282166348873799/1.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282166348873799/1.jpg')
        .setFooter('Page 3/6')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
        
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820270398439555092/2.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820270398439555092/2.jpg')
        .setFooter('Page 5/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282137478561822/2.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282137478561822/2.jpg')
        .setFooter('Page 5/6')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Objet obtenable')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/820282166437085194/2.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREY')
        .addField('Jour :', `Dimanche`)
        .addField('Donjon pour les personnages :', `La Gorge de l’oubli et Manoir Taishan.`)
        .addField('Donjon pour les armes:', 'La Pépinière de Cécilia et le Palais secret de Lianshan')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/820282166437085194/2.jpg')
        .setFooter('Page 6/6')
        ,
        reactions:{
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()
}

module.exports.help = {
    name: "dimanche",
    description: "*Fiche quotidienne de **Dimanche**.*",
    category: "donjon"
}