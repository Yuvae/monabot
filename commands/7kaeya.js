
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
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975679395233792/PRENSENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975679395233792/PRENSENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975676924002354/maindps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975676924002354/maindps.jpg')
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
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975674834976798/supportdps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975674834976798/supportdps.jpg')
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
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975654782926919/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975654782926919/DNIV.jpg')
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
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975661141491712/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975661141491712/DAPP.jpg')
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
        .setTitle('Fiche de Kaeya')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975656255389736/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Kaeya.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975656255389736/ARMES.jpg')
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
    name: "pkaeya",
    description: "*Fiche de Kaeya.*",
    category: "cryo"
}