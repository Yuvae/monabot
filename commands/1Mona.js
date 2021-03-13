
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
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964686006222918/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964686006222918/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964691153027072/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964691153027072/SUPPORT.jpg')
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
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964683250696222/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964683250696222/DPS.jpg')
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
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964681158131732/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964681158131732/dniv.jpg')
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
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964679929200740/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964679929200740/DAPP.jpg')
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
        .setTitle('Fiche de Mona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819964677782110258/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/08/Mona-1.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819964677782110258/ARMES.jpg')
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
    name: "pmona",
    description: "*Fiche de Mona.*",
    category: "hydro"
}