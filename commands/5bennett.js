
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
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819958435117924412/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819958435117924412/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819958434740699176/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819958434740699176/DPS.jpg')
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
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819958439895498772/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819958439895498772/support.jpg')
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
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819958432626770000/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819958432626770000/DNIV.jpg')
        .setFooter('Page 4/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819957420246695987/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819957420246695987/DAPP.jpg')
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
        .setTitle('Fiche de Bennett')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819958440604467271/ARME.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à une main`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Bennett.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819958440604467271/ARME.jpg')
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
    name: "pbennett",
    description: "*Fiche de Bennett.*",
    category: "pyro"
}