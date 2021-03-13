
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
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970361407701052/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970361407701052/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970354776113162/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970354776113162/SUPPORT.jpg')
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
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970363530149888/SUB.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970363530149888/SUB.jpg')
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
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970359444373544/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970359444373544/DNIV.jpg')
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
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970356856094761/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970356856094761/DAPP.jpg')
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
        .setTitle('Fiche de Xingqiu')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819970360412733450/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à une main`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Xingqiu.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819970360412733450/ARMES.jpg')
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
    name: "pxingqiu",
    description: "*Fiche de Xingqiu.*",
    category: "hydro"
}