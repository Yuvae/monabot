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
        .setTitle('Fiche de Klee')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784956850831400/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Klee.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784956850831400/PRESENTATION.jpg')
        .setFooter('Page 1/5')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Klee')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784968800403536/main_dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Klee.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784968800403536/main_dps.jpg')
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
        .setTitle('Fiche de Klee')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784978845368381/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Klee.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784978845368381/DNIV.jpg')
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
        .setTitle('Fiche de Klee')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808784990984732692/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Klee.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808784990984732692/DAPP.jpg')
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
        .setTitle('Fiche de Klee')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/808785005731905552/armes.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Klee.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/808785005731905552/armes.jpg')
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
    name: "pklee",
    description: "*Fiche de Klee.*",
    category: "pyro"
}