
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
        .setTitle('Fiche de Razor')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978261248999424/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Razor.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978261248999424/PRESENTATION.jpg')
        .setFooter('Page 1/5')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Razor')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978270128078898/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Razor.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978270128078898/DPS.jpg')
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
        .setTitle('Fiche de Razor')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978267237941248/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Razor.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978267237941248/dniv.jpg')
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
        .setTitle('Fiche de Razor')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978265787760690/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Razor.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978265787760690/dapp.jpg')
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
        .setTitle('Fiche de Razor')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978263929290752/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Razor.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978263929290752/ARMES.jpg')
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
    name: "prazor",
    description: "*Fiche de Razor.*",
    category: "electro"
}