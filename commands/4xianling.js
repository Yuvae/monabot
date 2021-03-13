
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
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784828237479945/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784828237479945/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784841382297630/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784841382297630/DPS.jpg')
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
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784869198266378/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784869198266378/SUPPORT.jpg')
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
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784888672026684/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784888672026684/DNIV.jpg')
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
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784899414163556/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784899414163556/DAPP.jpg')
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
        .setTitle('Fiche de Xiangling')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784929173405696/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xiangling.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784929173405696/ARMES.jpg')
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
    name: "pXiangling",
    description: "*Fiche de Xiangling.*",
    category: "pyro"
}