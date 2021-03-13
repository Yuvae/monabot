
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
        .setTitle('Fiche de Albeddo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986915431415828/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986915431415828/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Albedo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986906875035698/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986906875035698/support.jpg')
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
        .setTitle('Fiche de Albedo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986913515012096/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986913515012096/DPS.jpg')
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
        .setTitle('Fiche de Albedo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986912776683540/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986912776683540/DNIV.jpg')
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
        .setTitle('Fiche de Albedo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986910180409354/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986910180409354/DAPP.jpg')
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
        .setTitle('Fiche de Albedo')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819986908486041610/armes.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/01/Albedo.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819986908486041610/armes.jpg')
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
    name: "palbedo",
    description: "*Fiche de Albedo.*",
    category: "geo"
}