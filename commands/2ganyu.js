
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
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973764947116042/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973764947116042/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973762954428416/main_dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973762954428416/main_dps.jpg')
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
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973751356784690/SUBDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973751356784690/SUBDPS.jpg')
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
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973762102853643/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973762102853643/dniv.jpg')
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
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973760797900860/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973760797900860/DAPP.jpg')
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
        .setTitle('Fiche de Ganyu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819973760051576872/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Ganyu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819973760051576872/ARMES.jpg')
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
    name: "pganyu",
    description: "*Fiche de Ganyu.*",
    category: "cryo"
}