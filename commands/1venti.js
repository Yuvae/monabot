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
        .setTitle('Fiche de Venti')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819981179818213426/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Venti.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819981179818213426/presentation.jpg')
        .setFooter('Page 1/5')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Venti')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819981188361486359/dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Venti.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819981188361486359/dps.jpg')
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
        .setTitle('Fiche de Venti')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819981186335113266/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Venti.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819981186335113266/dniv.jpg')
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
        .setTitle('Fiche de Venti')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819981184703791104/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Venti.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819981184703791104/dapp.jpg')
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
        .setTitle('Fiche de Venti')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819981183843827772/arme.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GREEN')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Anemo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Venti.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819981183843827772/arme.jpg')
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
    name: "pventi",
    description: "*Fiche de Venti.*",
    category: "anemo"
}