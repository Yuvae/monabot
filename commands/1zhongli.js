
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
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985961705275432/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985961705275432/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985953145880606/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985953145880606/SUPPORT.jpg')
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
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985959772487701/maindps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985959772487701/maindps.jpg')
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
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985957814009886/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985957814009886/dniv.jpg')
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
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985955909664819/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985955909664819/dapp.jpg')
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
        .setTitle('Fiche de Zhongli')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819985955040526336/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Lance`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Zhongli.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819985955040526336/ARMES.jpg')
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
    name: "pzhongli",
    description: "*Fiche de Zhongli.*",
    category: "geo"
}