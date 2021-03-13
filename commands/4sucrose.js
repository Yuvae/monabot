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
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985125461983232/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985125461983232/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985117493461012/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985117493461012/SUPPORT.jpg')
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
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985124006428722/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985124006428722/DPS.jpg')
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
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985121733115915/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985121733115915/DNIV.jpg')
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
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985120513097758/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985120513097758/DAPP.jpg')
        .setFooter('Page 6/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Sucrose')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985119888277574/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Sucrose.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985119888277574/ARMES.jpg')
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
    name: "psucrose",
    description: "*Fiche de Sucrose.*",
    category: "anemo"
}