
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
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976445186277426/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976445186277426/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976451867672607/PHYSIQUE.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976451867672607/PHYSIQUE.jpg')
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
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976449158545490/ELECTRO.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976449158545490/ELECTRO.jpg')
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
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976448138805378/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976448138805378/DNIV.jpg')
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
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976446901878844/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976446901878844/dapp.jpg')
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
        .setTitle('Fiche de Keqing')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819976446670798919/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Keqing-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819976446670798919/ARMES.jpg')
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
    name: "pkeqing",
    description: "*Fiche de Keqing.*",
    category: "electro"
}