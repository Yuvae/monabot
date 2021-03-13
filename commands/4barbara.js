
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
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967460907679754/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967460907679754/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967452821192734/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967452821192734/SUPPORT.jpg')
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
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967458784968754/dps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967458784968754/dps.jpg')
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
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967457430863932/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967457430863932/DNIV.jpg')
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
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967456680476682/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967456680476682/DAPP.jpg')
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
        .setTitle('Fiche de Barbara')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819967454809030716/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('BLUE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Hydro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Barbara.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819967454809030716/ARMES.jpg')
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
    name: "pbarbara",
    description: "*Fiche de Barbara.*",
    category: "hydro"
}