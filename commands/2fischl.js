
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
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977278859116584/PRSENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977278859116584/PRSENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977277801627658/MAINDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977277801627658/MAINDPS.jpg')
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
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977279857229835/SUBDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977279857229835/SUBDPS.jpg')
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
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977275130773555/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977275130773555/dniv.jpg')
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
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977275662794812/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977275662794812/dapp.jpg')
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
        .setTitle('Fiche de Fischl')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819977271950573598/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Fischl.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819977271950573598/ARMES.jpg')
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
    name: "pfischl",
    description: "*Fiche de Fischl.*",
    category: "electro"
}