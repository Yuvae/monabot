
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
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961891324559370/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961891324559370/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961889106559036/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961889106559036/DPS.jpg')
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
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961882248216607/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961882248216607/support.jpg')
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
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961887332499487/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('hhttps://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961887332499487/DNIV.jpg')
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
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961885725949982/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961885725949982/DAPP.jpg')
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
        .setTitle('Fiche de Xinyan')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819961883854372904/arme.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epée à deux mains`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Xinyan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819961883854372904/arme.jpg')
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
    name: "pxinyan",
    description: "*Fiche de Xinyan.*",
    category: "pyro"
}