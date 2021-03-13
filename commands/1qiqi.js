
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
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971145532440616/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971145532440616/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971149998981120/HEAL.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971149998981120/HEAL.jpg')
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
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971128222416946/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971128222416946/DPS.jpg')
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
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971131166818314/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971131166818314/DNIV.jpg')
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
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971129530777670/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971129530777670/DAPP.jpg')
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
        .setTitle('Fiche de Qiqi')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819971128810405928/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Qiqi-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819971128810405928/ARMES.jpg')
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
    name: "pqiqi",
    description: "*Fiche de Qiqi.*",
    category: "cryo"
}