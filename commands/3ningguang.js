
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
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987652815355934/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987652815355934/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987651092283432/MAINDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987651092283432/MAINDPS.jpg')
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
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987642439172117/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987642439172117/SUPPORT.jpg')
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
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987648666927144/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987648666927144/DNIV.jpg')
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
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987645140566087/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987645140566087/DAPP.jpg')
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
        .setTitle('Fiche de Ningguang')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819987644129607680/armes.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Ninguan.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819987644129607680/armes.jpg')
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
    name: "pningguang",
    description: "*Fiche de Ningguang.*",
    category: "geo"
}