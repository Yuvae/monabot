
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
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966773264252939/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966773264252939/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966776074961016/BURST.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966776074961016/BURST.jpg')
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
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966779757166612/MAINDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966779757166612/MAINDPS.jpg')
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
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966778674774036/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966778674774036/DNIV.jpg')
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
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966778570047498/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966778570047498/DAPP.jpg')
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
        .setTitle('Fiche de Tartaglia')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819966773717631026/armes.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `5★`)
        .addField('Arme :', `Arc`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/11/Childe.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819966773717631026/armes.jpg')
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
    name: "ptartaglia",
    description: "*Fiche de Tartaglia.*",
    category: "hydro"
}