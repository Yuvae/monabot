
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
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959721926721546/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959721926721546/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959721108176936/dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959721108176936/dps.jpg')
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
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959724098322472/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959724098322472/support.jpg')
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
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959719820918844/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959719820918844/dniv.jpg')
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
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959717924831254/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959717924831254/DAPP.jpg')
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
        .setTitle('Fiche d\'Amber')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819959716104503306/AMRES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('RED')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Pyro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Amber.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819959716104503306/AMRES.jpg')
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
    name: "pamber",
    description: "*Fiche d'Amber.*",
    category: "pyro"
}