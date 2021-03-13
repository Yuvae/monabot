
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
        .setTitle('Fiche de Hu Tao')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819591037382950992/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/02/Hutao.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819591037382950992/presentation.jpg')
        .setFooter('Page 1/5')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Hu Tao')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819591048460238878/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/02/Hutao.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819591048460238878/DPS.jpg')
        .setFooter('Page 2/5')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Hu tao')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819591038305304647/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/02/Hutao.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819591038305304647/DNIV.jpg')
        .setFooter('Page 3/5')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
        
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Hu Tao')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819590962140676117/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/02/Hutao.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819590962140676117/DAPP.jpg')
        .setFooter('Page 4/5')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Hu Tao')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819591055610478612/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2021/02/Hutao.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819591055610478612/ARMES.jpg')
        .setFooter('Page 5/5')
        ,
        reactions:{
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()
}

module.exports.help = {
    name: "phutao",
    description: "*Fiche de Hu Tao.*",
    category: "pyro"
}