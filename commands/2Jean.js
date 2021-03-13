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
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982258404458506/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982258404458506/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982258433425448/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982258433425448/DPS.jpg')
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
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982250731896882/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982250731896882/support.jpg')
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
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982256059318333/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982256059318333/DNIV.jpg')
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
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982255392948335/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982255392948335/DAPP.jpg')
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
        .setTitle('Fiche de Jean')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819982254037401630/arme.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Jean.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819982254037401630/arme.jpg')
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
    name: "pjean",
    description: "*Fiche de Jean.*",
    category: "anemo"
}