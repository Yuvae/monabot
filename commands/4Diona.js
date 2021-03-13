
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
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975030073983006/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975030073983006/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975056620912671/HEAL.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975056620912671/HEAL.jpg')
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
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975051183915089/dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975051183915089/dps.jpg')
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
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975049296871424/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975049296871424/DNIV.jpg')
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
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975047036010526/dapP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975047036010526/dapP.jpg')
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
        .setTitle('Fiche de Diona')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819975045594087504/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Diona.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819975045594087504/ARMES.jpg')
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
    name: "pdiona",
    description: "*Fiche de Diona.*",
    category: "cryo"
}